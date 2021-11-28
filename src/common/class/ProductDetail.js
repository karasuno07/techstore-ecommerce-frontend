export default class ProductDetail {
   constructor(id, inStock, price, discount, descriptions, isDefault, images) {
      this.id = id
      this.inStock = +inStock
      this.price = +price
      this.discount = +discount
      this.descriptions = descriptions || null
      this.isDefault = isDefault || false
      this.images = images || []
   }

   static fromObject(detail) {
      return new ProductDetail(
         detail.id,
         detail.inStock,
         detail.price,
         detail.discount,
         detail.descriptions,
         detail.isDefault,
         detail.images
      )
   }
}
