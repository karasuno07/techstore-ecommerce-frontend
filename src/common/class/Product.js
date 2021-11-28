import Brand from "./Brand"
import Category from "./Category"
import ProductDetail from "./ProductDetail"

export class CommonProductProperties {
   constructor(id, name, slug, brand, category) {
      this.id = id
      this.name = name
      this.slug = slug
      this.brand = Brand.fromObject(brand)
      this.category = Category.fromObject(category)
   }

   static fromObject(product) {
      return new CommonProductProperties(
         product.id,
         product.name,
         product.slug,
         product.brand,
         product.category
      )
   }
}

export default class Product extends CommonProductProperties {
   constructor(id, name, slug, brand, category, details, available) {
      super(id, name, slug, brand, category)
      this.details =
         details !== null && Array.isArray(details)
            ? details.map((detail) => ProductDetail.fromObject(detail))
            : null
      this.available = available || true
   }

   static fromObject(product) {
      return new Product(
         product.id,
         product.name,
         product.slug,
         product.brand,
         product.category,
         product.details,
         product.available
      )
   }
}
