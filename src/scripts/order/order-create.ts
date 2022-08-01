import { Order as CtOrder, OrderState as CtOrderState, ShipmentState } from '@commercetools/platform-sdk';
import * as dotenv from 'dotenv';
import { getOrderById } from '../../commercetools/order';
import { roundAmountOnTwoDecimals, transformCentAmountToAmount } from './helpers/helper';
import { setOrderLines } from './helpers/order-line';
import { Order, OrderLine, OrderState } from './types/order-type';

dotenv.config();

console.log(orderCreate(''));

function orderCreate(orderId: string) {
    const ctOrder: CtOrder = getOrderById(orderId);

    // Transform
    const couponCodes = ctOrder.discountCodes ?? [];
    const coupon = couponCodes[0]?.discountCode?.obj?.code ?? '';
  
    const order_lines: OrderLine[] = setOrderLines(ctOrder);
  
    const state = transformCtOrderStateToOrderState(
      ctOrder.orderState,
      ctOrder.shipmentState,
    );

    if (!ctOrder.taxedPrice?.totalGross.centAmount || !ctOrder.taxedPrice?.totalNet.centAmount) return;
  
    const amountTotal = transformCentAmountToAmount(
      ctOrder.taxedPrice?.totalGross.centAmount,
      ctOrder.taxedPrice?.totalGross.fractionDigits,
    );
    const amountUntaxed = transformCentAmountToAmount(
      ctOrder.taxedPrice?.totalNet.centAmount,
      ctOrder.taxedPrice?.totalNet.fractionDigits,
    );
  
    const order: Order = {
      order_id: ctOrder.id,
      state,
      locale: ctOrder.locale || 'en',
      date_order: new Date(ctOrder.createdAt)
        .toISOString()
        .replace(/T/, ' ')
        .replace(/\..+/, ''),
      currency: ctOrder.totalPrice.currencyCode,
      amount_untaxed: amountUntaxed,
      amount_total: amountTotal,
      amount_tax: roundAmountOnTwoDecimals(amountTotal - amountUntaxed),
      order_lines,
      order_number: ctOrder.orderNumber,
      discount_order: 0,
      coupon,
    };

    return order;
}  

export function transformCtOrderStateToOrderState(
    orderState: CtOrderState,
    shipmentState?: ShipmentState,
  ): OrderState {
    let owareOrderState: OrderState = 'pending';
  
    switch (orderState) {
      case 'Confirmed':
        owareOrderState = 'pending';
        break;
      case 'Complete':
        if (!shipmentState) {
          console.log('State can not be complete and not have a shipmentstate');
          break;
        }
  
        if (shipmentState === 'Shipped') owareOrderState = 'shipped';
        else if (shipmentState === 'Delayed') owareOrderState = 'delayed';
        break;
      case 'Cancelled':
        owareOrderState = 'cancelled';
        break;
    }
  
    return owareOrderState;
  }


  