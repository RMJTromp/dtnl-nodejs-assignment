// import {getOrderById} from "../src/commercetools/order";

const {getOrderById} = require("../.build/commercetools/order");

const order = getOrderById("");

// items price tests & save to variable for future reference
const itemPrices = (() => {
    return order.lineItems.map(item => {
        // the price it *should* be
        let finalPrice = item.price.value.centAmount * item.quantity;

        // apply discounts to price
        item.discountedPricePerQuantity.forEach(discount => {
            // remove full price * discount quantity
            finalPrice -= item.price.value.centAmount * discount.quantity;

            // calculate discounted price
            const   totalDiscountAmount =  discount.discountedPrice.includedDiscounts.map(_discount => _discount.discountedAmount.centAmount).reduce((a,v) => a+v, 0),
                discountedPrice = item.price.value.centAmount - totalDiscountAmount;

            test(`discounted price check - ${item.name.en}`, () => {
                expect(discountedPrice).toBe(discount.discountedPrice.value.centAmount);
            })

            // add discounted price to final price
            finalPrice += discountedPrice;
        })

        test(`final price check - ${item.name.en}`, () => {
            expect(finalPrice).toBe(item.totalPrice.centAmount);
        })

        // calculate total tax
        const totalTax = Math.round(item.taxRate.includedInPrice
            ? finalPrice / (1 + item.taxRate.amount) * item.taxRate.amount
            : finalPrice * item.taxRate.amount);

        // calculate total gross
        const totalGross = item.taxRate.includedInPrice
            ? finalPrice
            : finalPrice + totalTax;

        // calculate total net
        const totalNet = totalGross - totalTax;

        test(`total tax check - ${item.name.en}`, () => {
            expect(totalTax).toBe(item.taxedPrice.totalTax.centAmount);
        })

        test(`total gross check - ${item.name.en}`, () => {
            expect(totalGross).toBe(item.taxedPrice.totalGross.centAmount);
        })

        test(`total net check - ${item.name.en}`, () => {
            expect(totalNet).toBe(item.taxedPrice.totalNet.centAmount);
        })

        return {totalTax, totalGross, totalNet};
    }).reduce((a,v) => {return {
        totalTax: (a.totalTax || 0) + v.totalTax,
        totalGross: (a.totalGross || 0) + v.totalGross,
        totalNet: (a.totalNet || 0) + v.totalNet
    }}, {});
})()

// shipping price tests
{
    const   taxRate = order.shippingInfo.taxRate.amount,
            netPrice = order.shippingInfo.taxedPrice.totalNet.centAmount,
            totalTax = Math.round(taxRate * netPrice),
            grossPrice = netPrice + totalTax;

    test('shipping tax check', () => {
        expect(totalTax).toBe(order.shippingInfo.taxedPrice.totalTax.centAmount);
    });

    test('shipping gross price check', () => {
        expect(grossPrice).toBe(order.shippingInfo.taxedPrice.totalGross.centAmount);
    });
}

// total price tests
{
    /* perform tests with 3 level calculation deepness
     * 0 = use the totalNet price defined in the Order object
     * 1 = sum up all item (final) prices and use that as total net price
     * 2 = manually calculate and sum up gross prices for all items and use that as net price */
    [0, 1, 2].forEach(depth => {
        const   taxRates = order.taxedPrice.taxPortions.map(portion => portion.rate),
                netPrice = (() => {
                    if(depth === 0) return order.taxedPrice.totalNet.centAmount;
                    else if(depth === 1) return order.lineItems.map(item => item.totalPrice.centAmount).reduce((a,v) => a+v, 0);
                    else if(depth === 2) return itemPrices.totalGross;
                })(),
                totalTax = Math.round(taxRates.reduce((total, taxRate) => total + netPrice * taxRate, 0)),
                grossPrice = netPrice + totalTax;

        if(depth)
            test(`total net price check - depth: ${depth}`, () => {
                expect(netPrice).toBe(order.taxedPrice.totalNet.centAmount)
            });

        // test if calculated tax amount is correct for each tax portion
        order.taxedPrice.taxPortions.forEach(portion => {
            test(`${portion.name} tax check - depth: ${depth}`, () => {
                const amount = Math.round(portion.rate * netPrice);
                expect(amount).toBe(portion.amount.centAmount);
            });
        })

        test(`total tax check - depth: ${depth}`, () => {
            expect(totalTax).toBe(order.taxedPrice.totalTax.centAmount);
        });

        test(`total gross price check - depth: ${depth}`, () => {
            expect(grossPrice).toBe(order.taxedPrice.totalGross.centAmount);
        });
    })
}