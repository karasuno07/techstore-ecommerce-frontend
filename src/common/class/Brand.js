export default class Brand {
   constructor(id, name, slug, image) {
      this.id = id
      this.name = name
      this.slug = slug
      this.image = image
   }

   static fromObject(brand) {
      return new Brand(brand.id, brand.name, brand.slug, brand.image)
   }
}
