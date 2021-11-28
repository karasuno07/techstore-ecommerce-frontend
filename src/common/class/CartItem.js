import { CommonProductProperties } from "./Product"
import ProductDetail from "./ProductDetail"

export default class CartItem {
   constructor(product, detail, quantity) {
      this.product = CommonProductProperties.fromObject(product)
      this.detail = ProductDetail.fromObject(detail)
      this.quantity = quantity
      this.totalPrice = (detail.price - detail.discount) * quantity
   }
}
