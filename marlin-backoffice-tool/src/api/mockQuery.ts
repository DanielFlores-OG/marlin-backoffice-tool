import { Item, Query, ItemHistory } from "../utils/types";
import { mockItems, mockItemsHistory } from "../utils/mockData";

export const mockFindItem = ({ attribute, value }: Query): Item[] =>
  mockItems.filter((item) => {
    switch (attribute) {
      case "itemid":
        return item.id === value;
      case "number":
        return item.externalOrderDetailNo === value;
      case "ordernumber":
        return item.orderNumber === value;
      case "wid":
        return item.warehouseTrackingIds.includes(value);
      default:
        return false;
    }
  });

export const mockFindItemHistory = (id: string): ItemHistory[] =>
  mockItemsHistory.filter((item) => item.externalItemId === id);
