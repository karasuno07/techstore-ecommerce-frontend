class Criteria {
   constructor(value) {
      this.value = "" + value
      this.active = false
   }
}

export default class CriteriaFilter {
   constructor(filterName, criteria) {
      if (!Array.isArray(criteria)) throw new TypeError("'criteria' argument must be an array")
      this.filterName = filterName

      const criteriaObjectArray = criteria.map((el) => new Criteria(el))
      this.criteria = criteriaObjectArray
      this.active = false
   }
}
