export interface Query {
  value: string;
  attribute: string;
}

export interface Item {
  id: string;
  externalItemId: string;
  externalOrderDetailNo: string;
  externalOrderId: string;
  orderNumber: string;
  partnerId: string;
  partnerVariationId: string;
  state: string;
  ioeCommKey: string;
  stockPromiseId: string;
  reserved: boolean;
  failed: boolean;
  warehouseTrackingIds: string[];
}

export interface ItemHistory {
  id: string;
  externalItemId: string;
  createdAt: string;
  event: string;
}
