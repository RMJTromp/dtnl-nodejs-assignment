import { PriceDraft, ProductDraft } from "@commercetools/platform-sdk";

console.log(productCreate('{"publish":"true","translations":[{"region":"en","product_name":"Test product","search_key":"test-product"},{"region":"nl-NL","product_name":"Test product","search_key":"test-product"}],"date":"2017-01-01","variants":[{"stock_unit":"UUDDHE XX OOOOOOOOI","prices":{"USD":[{"country":"DEFAULT","amount":"100.00","currency":"$"},{"country":"DEFAULT","amount":"200.00","currency":"$"},{"country":"US","amount":"90.00","currency":"$"}],"EUR":[{"country":"DEFAULT","amount":"100.00","currency":"EUR"}]}}]}'));

function productCreate(json: string) {
    const product: ProductDraft = {} as ProductDraft;

    return json;
}

function transformProduct(product: any): ProductDraft {
    const localProduct: ProductDraft = {
        productType: {
            typeId: "product-type",
            id: "test-id",
        },
    } as ProductDraft;

    return localProduct;
}


/**
 * DO NOT DELETE
 * Function to set the sku of a product
 * @param sku Original sku of an incoming object 
 * @returns The sku of the product for the commercetools platform
 */
function setSKU(sku: string): string {
    return "";
}

/**
 * DO NOT DELETE
 * Function to set the prices of a product
 * @param prices Pricing object of an incoming object
 * @returns Returns a priceDraft object for the commercetools platform
 */
function setPrices(prices: any):PriceDraft[] {
    const priceDrafts: PriceDraft[] = [];

    return priceDrafts;
}
