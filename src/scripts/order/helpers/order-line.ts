import { Order } from "@commercetools/platform-sdk";
import { OrderLine, OrderState } from "../types/order-type";
import { roundAmountOnTwoDecimals, transformCentAmountToAmount } from "./helper";

export function setOrderLines(ctOrder: Order): OrderLine[] {
    const orderLines: OrderLine[] = [];
    for (const lineItem of ctOrder.lineItems) {
        if (
          lineItem.taxedPrice?.totalGross.centAmount == undefined ||
          lineItem.taxedPrice?.totalNet.centAmount == undefined
        ) {
          throw new Error(
            'Required field for a line item is missing, not able to transform the order',
          );
        }
    
        const state: OrderState =
          (lineItem.state[0].state.obj?.key.replace(
            'state_line_item_',
            '',
          ) as OrderState) ?? 'pending';
    
        try {
          const price_total: number = roundAmountOnTwoDecimals(
            transformCentAmountToAmount(
              lineItem.taxedPrice.totalGross.centAmount,
              lineItem.taxedPrice.totalGross.fractionDigits,
            ),
          );
          const price_subtotal = transformCentAmountToAmount(
            lineItem.taxedPrice.totalNet.centAmount,
            lineItem.taxedPrice.totalNet.fractionDigits,
          );
    
          orderLines.push({
            ct_id: lineItem.id,
            name:
              ctOrder.locale && lineItem.name[ctOrder.locale]
                ? lineItem.name[ctOrder.locale]
                : lineItem.name['en'],
            ean: lineItem.variant.attributes?.find(f => f.name === 'ean')?.value,
            price_unit: transformCentAmountToAmount(
              lineItem.price.value.centAmount,
              lineItem.price.value.fractionDigits,
            ),
            discounted_price_unit: 0,
            price_subtotal,
            price_total,
            price_tax: roundAmountOnTwoDecimals(price_total - price_subtotal),
            qty_delivered: 0,
            qty_to_invoice: lineItem.quantity,
            state,
            discount_line_item: 0,
            tax_rate: lineItem.taxRate?.amount ? lineItem.taxRate.amount * 100 : 0,
          });
        } catch (error: any) {
          continue;
        }
      }

    return orderLines;
}