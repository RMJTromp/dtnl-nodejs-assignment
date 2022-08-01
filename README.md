# General description of the assignment
The assignment contains of two parts with some optional extra tasks, based around the concept of an e-commerce store that connects two different services. We have data coming from one system that we need to transform and input into another system. One of the systems is called `commercetools`. The other system we will refer to as the "external system".

The project uses TypeScript with the relevant commercetools packages. Use TypeScript and the [commercetools documentation](https://docs.commercetools.com/api/) to your advantage.

Try spending no longer than 1,5 hours on the assignment. If you have time left, consider refactoring and writing some unit tests. If you run into any issues and need support, feel free to reach out to your DEPT contact!

Happy coding ;)

# Assignment 1:
For this assignment you will have to look at existing code and solve some bugs in it. Consider also refactoring some parts that you think need improvements. In this use case, we have an event from commercetools that we need to transform and send to an external system. You can find the incoming event format in `src/commercetools.order.ts`. The outcome of the event has some issues in relation to the discounted prices.

**Your task is to find and solve the bug in the discounted prices.**
- Make sure that these amounts are properly calculated.
- Look through the code and use TypeScript to your advantage.

# Assignment 2:
For this assignment you will have to write your own code nearly from scratch. In this use case, there is an external system that creates products. We receive incoming events with the newly created products, and we need to convert this into the commercetools format. An example of this incoming event format can be found in `src/scripts/product/product-create.ts`.

**Your task is to transform the input into a `ProductDraft`, which is the input format for commercetools.**
- Finish the `productCreate` and `transformProduct` functions in `src/scripts/product/product-create.ts`.
- Validate the prices for duplicates, if one is duplicate, keep the lowest. Please use the following funtion for this logic: setPrices()
  
Properties explained:
- The name and the slug are localised with values such as `nl-NL`, `en-US`, `de-DE`, etc.
- Use `setPrices` to transform the price object. Additionally; validate the prices for duplicates by currency and country. If duplicates are found, keep the one with the lowest amount. If a country code is set to `DEFAULT`, this means no country is set for this price.
- The SKU being sent to us uses a different format than what we want. ABBBCC DD EEE (input) --> 1A3B2C-2D-3E (output). Use `setSKU` to transform the SKU to the right format.
- The `date` field in the input is the creation date and is optional. If this field is not provided, take the current date.
- We already set the productType property for you, you don't have to do anything with this.

Below is an example of a `ProductDraft` with dummy values as a reference.

```
{
    productType: {
        typeId: "product-type",
        id: "test-id",
    },
    name: {
        en: 'name'
    },
    slug: {
        en: 'slug'
    },
    masterVariant: {
        sku: 'sku',
        prices: [
            {
                value: {
                    centAmount: 0
                    currencyCode: "EUR"
                }
            },
            country: 'nl'
        ],
        attributes: [
            {
                name: "created_at",
                value: "2022-02-23T14:13:16.366Z",
            }
        ]
    }
}
```