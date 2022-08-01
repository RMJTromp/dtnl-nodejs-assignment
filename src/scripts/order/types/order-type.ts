export interface Order {
    order_id: string;
    state: OrderState;
    date_order: string;
    currency: string;
    amount_untaxed: number;
    amount_tax: number;
    amount_total: number;
    order_lines: OrderLine[];
    order_number?: string;
    // Total discounted value on the order with tax included.
    discount_order?: number;
    coupon?: string;
    locale?: string | undefined;
}

export type OrderState =
  | 'pending'
  | 'shipped'
  | 'shipped_partially'
  | 'delayed'
  | 'cancelled'
  | 'returned'
  | 'refunded'
  | 'returned_partially'
  | 'refunded_partially';

export interface OrderLine {
    ct_id: string;
    state: OrderState;
    name: string;
    ean: string;
    // Price for one unit with tax included without discount applied.
    price_unit: number;
    // Price for one unit with tax included with discount applied.
    discounted_price_unit: number;
    price_subtotal: number;
    price_tax: number;
    price_total: number;
    // Total discounted value of the order line with tax included.
    discount_line_item: number;
    qty_delivered?: number;
    qty_to_invoice: number;
    tax_rate: number;
}