import { Order } from "@commercetools/platform-sdk";

export function getOrderById(id: string): Order {
    return {
        type: "Order",
        id: "12397058-06d1-4b10-b195-87310661a123",
        version: 3,
        lastMessageSequenceNumber: 3,
        createdAt: "2022-07-18T13:43:11.121Z",
        lastModifiedAt: "2022-07-18T13:43:11.227Z",
        lastModifiedBy: {
            clientId: "12327LWWUj_P1FaDHA123",
            isPlatformClient: false,
        },
        createdBy: {
            clientId: "12327LWWUj_P1FaDHA123",
            isPlatformClient: false,
        },
        orderNumber: "ONL-129123",
        customerId: "123e95b8-0a51-4359-9f53-582208447123",
        customerEmail: "test@test.test",
        locale: "nl-NL",
        totalPrice: {
            type: "centPrecision",
            currencyCode: "EUR",
            centAmount: 3908,
            fractionDigits: 2,
        },
        taxedPrice: {
            totalNet: {
                type: "centPrecision",
                currencyCode: "EUR",
                centAmount: 3230,
                fractionDigits: 2,
            },
            totalGross: {
                type: "centPrecision",
                currencyCode: "EUR",
                centAmount: 3908,
                fractionDigits: 2,
            },
            taxPortions: [
                {
                    rate: 0.21,
                    amount: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 678,
                        fractionDigits: 2,
                    },
                    name: "VAT",
                },
            ],
            totalTax: {
                type: "centPrecision",
                currencyCode: "EUR",
                centAmount: 678,
                fractionDigits: 2,
            },
        },
        country: "NL",
        orderState: "Confirmed",
        paymentState: "Paid",
        syncInfo: [],
        returnInfo: [],
        shippingInfo: {
            shippingMethodName: "Standaard bezorging",
            price: {
                type: "centPrecision",
                currencyCode: "EUR",
                centAmount: 595,
                fractionDigits: 2,
            },
            shippingRate: {
                price: {
                    type: "centPrecision",
                    currencyCode: "EUR",
                    centAmount: 595,
                    fractionDigits: 2,
                },
                freeAbove: {
                    type: "centPrecision",
                    currencyCode: "EUR",
                    centAmount: 15000,
                    fractionDigits: 2,
                },
                tiers: [],
            },
            taxRate: {
                name: "VAT",
                amount: 0.21,
                includedInPrice: true,
                country: "NL",
                id: "Ik8pa123",
                subRates: [],
            },
            taxCategory: {
                typeId: "tax-category",
                id: "12349e4d-ab2f-4f75-b256-95f2c1412123",
            },
            deliveries: [],
            shippingMethod: {
                typeId: "shipping-method",
                id: "12350326-a1ca-49a3-8a74-6896e43b7123",
            },
            taxedPrice: {
                totalNet: {
                    type: "centPrecision",
                    currencyCode: "EUR",
                    centAmount: 492,
                    fractionDigits: 2,
                },
                totalGross: {
                    type: "centPrecision",
                    currencyCode: "EUR",
                    centAmount: 595,
                    fractionDigits: 2,
                },
                totalTax: {
                    type: "centPrecision",
                    currencyCode: "EUR",
                    centAmount: 103,
                    fractionDigits: 2,
                },
            },
            shippingMethodState: "MatchesCart",
        },
        taxMode: "Platform",
        inventoryMode: "TrackOnly",
        taxRoundingMode: "HalfEven",
        taxCalculationMode: "LineItemLevel",
        origin: "Customer",
        lineItems: [
            {
                id: "123369d0-e61c-4be1-8944-f3ab3a31e123",
                productId: "123049f8-3707-4461-b390-a77d0d7e9123",
                productKey: "265750",
                name: {
                    en: "CLASSIC CHINO SHORT",
                },
                productType: {
                    typeId: "product-type",
                    id: "1234dd67-3eed-4c9d-b746-9780ad48e123",
                    version: 16,
                },
                productSlug: {
                    en: "classic-chino-short",
                },
                variant: {
                    id: 6,
                    sku: "141-155114-123",
                    prices: [
                        {
                            id: "123c8667-1681-441c-b257-7bea44460123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 1999,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "EUR",
                                        centAmount: 7995,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                        {
                            id: "1232b094-e32d-4993-933b-519201c85123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "USD",
                                centAmount: 2099,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "USD",
                                        centAmount: 8099,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                        {
                            id: "12316f14-630f-4609-85d4-a738e1074123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "PLN",
                                centAmount: 9599,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "PLN",
                                        centAmount: 38400,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                        {
                            id: "123f00d6-3376-40cd-a0b3-3e8446992123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "GBP",
                                centAmount: 1699,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "GBP",
                                        centAmount: 6799,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                    ],
                    images: [],
                    attributes: [
                        {
                            name: "ean",
                            value: "1238859891123",
                        },
                    ],
                    assets: [],
                    availability: {
                        channels: {
                            "123fddcb-77d1-4edd-864b-a15473106123": {
                                isOnStock: true,
                                availableQuantity: 1,
                                version: 75,
                                id: "123b9d19-ebfb-490c-90ba-73eae6434123",
                            },
                        },
                    },
                },
                price: {
                    id: "123c8667-1681-441c-b257-7bea44460123",
                    value: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1999,
                        fractionDigits: 2,
                    },
                    custom: {
                        type: {
                            typeId: "type",
                            id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                        },
                        fields: {
                            list_price: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 7995,
                                fractionDigits: 2,
                            },
                        },
                    },
                },
                quantity: 1,
                discountedPrice: {
                    value: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1699,
                        fractionDigits: 2,
                    },
                    includedDiscounts: [
                        {
                            discount: {
                                typeId: "cart-discount",
                                id: "1230fd33-d79e-46ac-959d-cd7dbc113123",
                            },
                            discountedAmount: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 300,
                                fractionDigits: 2,
                            },
                        },
                    ],
                },
                discountedPricePerQuantity: [
                    {
                        quantity: 1,
                        discountedPrice: {
                            value: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 1699,
                                fractionDigits: 2,
                            },
                            includedDiscounts: [
                                {
                                    discount: {
                                        typeId: "cart-discount",
                                        id: "1230fd33-d79e-46ac-959d-cd7dbc113123",
                                    },
                                    discountedAmount: {
                                        type: "centPrecision",
                                        currencyCode: "EUR",
                                        centAmount: 300,
                                        fractionDigits: 2,
                                    },
                                },
                            ],
                        },
                    },
                ],
                supplyChannel: {
                    typeId: "channel",
                    id: "123fddcb-77d1-4edd-864b-a15473106123",
                },
                taxRate: {
                    name: "VAT",
                    amount: 0.21,
                    includedInPrice: true,
                    country: "NL",
                    id: "Ik8pa123",
                    subRates: [],
                },
                addedAt: "2022-07-18T13:33:00.370Z",
                lastModifiedAt: "2022-07-18T13:33:00.370Z",
                state: [
                    {
                        quantity: 1,
                        state: {
                            typeId: "state",
                            id: "123701b9-e7cc-4f18-81fc-383b3a110123",
                        },
                    },
                ],
                priceMode: "Platform",
                totalPrice: {
                    type: "centPrecision",
                    currencyCode: "EUR",
                    centAmount: 1699,
                    fractionDigits: 2,
                },
                taxedPrice: {
                    totalNet: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1404,
                        fractionDigits: 2,
                    },
                    totalGross: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1699,
                        fractionDigits: 2,
                    },
                    totalTax: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 295,
                        fractionDigits: 2,
                    },
                },
                lineItemMode: "Standard",
            },
            {
                id: "1235be92-8cfd-46ac-9fd5-39299b9f0123",
                productId: "123fae90-0582-4c97-804a-37d68f6c0123",
                productKey: "279123",
                name: {
                    en: "MID LENGTH - CLASSIC CHINO",
                },
                productType: {
                    typeId: "product-type",
                    id: "1234dd67-3eed-4c9d-b746-9780ad48e123",
                    version: 16,
                },
                productSlug: {
                    en: "mid-length-classic-chino",
                },
                variant: {
                    id: 7,
                    sku: "141-155079-123",
                    prices: [
                        {
                            id: "1234fc78-633f-4b23-9dfc-e5daf8fd5123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 1899,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "EUR",
                                        centAmount: 6995,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                        {
                            id: "12325d51-cd11-4ea3-bb1b-443b10be4123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "USD",
                                centAmount: 1899,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "USD",
                                        centAmount: 7099,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                        {
                            id: "123e4764-e6c1-4ba3-9e88-35fb7eacf123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "PLN",
                                centAmount: 8699,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "PLN",
                                        centAmount: 33700,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                        {
                            id: "123f52dd-ce2d-4bcb-9cc5-9db14d41c123",
                            value: {
                                type: "centPrecision",
                                currencyCode: "GBP",
                                centAmount: 1599,
                                fractionDigits: 2,
                            },
                            custom: {
                                type: {
                                    typeId: "type",
                                    id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                                },
                                fields: {
                                    list_price: {
                                        type: "centPrecision",
                                        currencyCode: "GBP",
                                        centAmount: 5999,
                                        fractionDigits: 2,
                                    },
                                },
                            },
                        },
                    ],
                    images: [],
                    attributes: [
                        {
                            name: "ean",
                            value: "1238859973123",
                        },
                    ],
                    assets: [],
                    availability: {
                        channels: {
                            "123fddcb-77d1-4edd-864b-a15473106123": {
                                isOnStock: true,
                                availableQuantity: 44,
                                version: 335,
                                id: "12336a51-98d1-46ea-8062-40dc9be6a123",
                            },
                        },
                    },
                },
                price: {
                    id: "1234fc78-633f-4b23-9dfc-e5daf8fd5123",
                    value: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1899,
                        fractionDigits: 2,
                    },
                    custom: {
                        type: {
                            typeId: "type",
                            id: "1238ad5b-1346-468b-998a-ffeb084ff123",
                        },
                        fields: {
                            list_price: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 6995,
                                fractionDigits: 2,
                            },
                        },
                    },
                },
                quantity: 1,
                discountedPrice: {
                    value: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1614,
                        fractionDigits: 2,
                    },
                    includedDiscounts: [
                        {
                            discount: {
                                typeId: "cart-discount",
                                id: "1230fd33-d79e-46ac-959d-cd7dbc113123",
                            },
                            discountedAmount: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 285,
                                fractionDigits: 2,
                            },
                        },
                    ],
                },
                discountedPricePerQuantity: [
                    {
                        quantity: 1,
                        discountedPrice: {
                            value: {
                                type: "centPrecision",
                                currencyCode: "EUR",
                                centAmount: 1614,
                                fractionDigits: 2,
                            },
                            includedDiscounts: [
                                {
                                    discount: {
                                        typeId: "cart-discount",
                                        id: "1230fd33-d79e-46ac-959d-cd7dbc113123",
                                    },
                                    discountedAmount: {
                                        type: "centPrecision",
                                        currencyCode: "EUR",
                                        centAmount: 285,
                                        fractionDigits: 2,
                                    },
                                },
                            ],
                        },
                    },
                ],
                supplyChannel: {
                    typeId: "channel",
                    id: "123fddcb-77d1-4edd-864b-a15473106123",
                },
                taxRate: {
                    name: "VAT",
                    amount: 0.21,
                    includedInPrice: true,
                    country: "NL",
                    id: "Ik8pa123",
                    subRates: [],
                },
                addedAt: "2022-07-18T13:33:20.277Z",
                lastModifiedAt: "2022-07-18T13:33:20.277Z",
                state: [
                    {
                        quantity: 1,
                        state: {
                            typeId: "state",
                            id: "123701b9-e7cc-4f18-81fc-383b3a110123",
                        },
                    },
                ],
                priceMode: "Platform",
                totalPrice: {
                    type: "centPrecision",
                    currencyCode: "EUR",
                    centAmount: 1614,
                    fractionDigits: 2,
                },
                taxedPrice: {
                    totalNet: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1334,
                        fractionDigits: 2,
                    },
                    totalGross: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 1614,
                        fractionDigits: 2,
                    },
                    totalTax: {
                        type: "centPrecision",
                        currencyCode: "EUR",
                        centAmount: 280,
                        fractionDigits: 2,
                    },
                },
                lineItemMode: "Standard",
            },
        ],
        customLineItems: [],
        transactionFee: true,
        discountCodes: [
            {
                discountCode: {
                    typeId: "discount-code",
                    id: "123a37d2-ef64-4171-b6b0-d3b441b78123",
                },
                state: "MatchesCart",
            },
        ],
        directDiscounts: [],
        cart: {
            typeId: "cart",
            id: "123958d0-2062-4b2f-ad94-ac445abf3123",
        },
        custom: {
            type: {
                typeId: "type",
                id: "123ba6d5-0bc3-41a1-afba-b61a2df0e123",
            },
            fields: {
                pudo: "",
                ava_address_validated: "",
                order_created_at: "2022-07-18T13:43:11.123Z",
            },
        },
        shippingAddress: {
            firstName: "Test",
            lastName: "Test",
            streetName: "Test",
            streetNumber: "19",
            additionalStreetInfo: "",
            postalCode: "1111AA",
            city: "Test",
            state: "",
            country: "NL",
            phone: "",
            email: "test@test.test",
            additionalAddressInfo: "",
        },
        billingAddress: {
            firstName: "Test",
            lastName: "Test",
            streetName: "Test",
            streetNumber: "19",
            additionalStreetInfo: "",
            postalCode: "1111AA",
            city: "Test",
            state: "",
            country: "NL",
            phone: "",
            email: "test@test.test",
            additionalAddressInfo: "",
        },
        itemShippingAddresses: [],
        refusedGifts: [],
        store: {
            typeId: "store",
            key: "123",
        },
    };
}
