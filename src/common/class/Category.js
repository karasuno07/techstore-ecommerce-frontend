export default class Category {
   constructor(id, name, slug, parent) {
      this.id = id
      this.name = name
      this.slug = slug
      this.parent = parent ? new Category(parent.id, parent.name, parent.slug, parent.parent) : null
   }

   static fromObject(category) {
      return new Category(category.id, category.name, category.slug, category.parent)
   }
}
