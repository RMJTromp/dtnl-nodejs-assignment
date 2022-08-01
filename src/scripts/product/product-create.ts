import {PriceDraft, ProductDraft} from "@commercetools/platform-sdk";

console.log(productCreate('{"publish":"true","translations":[{"region":"en","product_name":"Test product","search_key":"test-product"},{"region":"nl-NL","product_name":"Test product","search_key":"test-product"}],"date":"2017-01-01","variants":[{"stock_unit":"UUDDHE XX OOOOOOOOI","prices":{"USD":[{"country":"DEFAULT","amount":"100.00","currency":"$"},{"country":"DEFAULT","amount":"200.00","currency":"$"},{"country":"US","amount":"90.00","currency":"$"}],"EUR":[{"country":"DEFAULT","amount":"100.00","currency":"EUR"}]}}]}'));

interface ProductObject {
    publish: "true" | "false"
    translations: {
        region: string
        product_name: string
        search_key: string
    }[]
    date: string
    variants: {
        stock_unit: string
        prices: PriceObject
    }[]
}

interface PriceObject {
    [currency: string]: {
        country: string
        amount: string
        currency: string
    }[]
}

function productCreate(json: string) {
    return transformProduct(JSON.parse(json));
}

function transformProduct(product: ProductObject): ProductDraft {
    return {
        publish: product.publish === "true",
        name: product.translations
            .map(translation => [translation.region, translation.product_name])
            .reduce((a, [key, value]) => {
                return {...a, [key]: value}
            }, {}),
        slug: product.translations
            .map(translation => [translation.region, translation.search_key])
            .reduce((a, [key, value]) => {
                return {...a, [key]: value}
            }, {}),
        productType: {
            typeId: "product-type",
            id: "test-id"
        },
        masterVariant: {
            ...product.variants.map(variant => {
                return {
                    sku: setSKU(variant.stock_unit),
                    prices: setPrices(variant.prices)
                }
            })[0],
            attributes: [
                {
                    name: "created_at",
                    value: new Date(product.date || Date.now()).toISOString()
                }
            ]
        },
        // date: product.date ?? new Date().toISOString().split('T')[0]
    };
}


/**
 * DO NOT DELETE
 * Function to set the sku of a product
 * @param sku Original sku of an incoming object
 * @returns The sku of the product for the commercetools platform
 */
function setSKU(sku: string): string {
    // return sku.replaceAll(" ", "-");
    return sku.replace(/ /g, "-");
}

/**
 * DO NOT DELETE
 * Function to set the prices of a product
 * @param prices Pricing object of an incoming object
 * @returns Returns a priceDraft object for the commercetools platform
 */
function setPrices(prices: PriceObject): PriceDraft[] {
    // convert all PriceObject to PriceDrafts
    const priceDraft : PriceDraft[] = Object.entries(prices).map(([currencyCode, _prices]) => {
        return _prices.map(price => {
            return {
                country: price.country,
                value: {
                    centAmount: currencyCode === "JPY"
                        ? parseInt(price.amount)
                        : Math.round(parseFloat(price.amount) * 100),
                    currencyCode: currencyCode
                }
            }
        })
    })[0];

    // collect all duplicate country names
    const duplicateCountries = priceDraft.reduce((a, price) => {
        return priceDraft.filter(_price => _price.country === price.country && _price !== price).length && !a.includes(price.country || "")
            ? a.concat(price.country || "")
            : a;
    }, [] as string[])

    // reduce price drafts and only keep the lowest value from duplicates
    return priceDraft.reduce((a, price) => {
        if(duplicateCountries.includes(price.country || "")) {
            const lowestValue = priceDraft
                .filter(_price => _price.country === price.country)
                .sort((a,b) => a.value.centAmount - b.value.centAmount)[0];

            if(a.includes(lowestValue)) return a;
        }

        return a.concat(price)
    }, [] as PriceDraft[])
}
