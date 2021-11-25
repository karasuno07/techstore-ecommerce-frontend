import { createSlice } from "@reduxjs/toolkit"
import CriteriaFilter from "common/class/CriteriaFilter"

const productFilterSlice = createSlice({
   name: "productFilter",
   initialState: {
      sort: {
         name: true,
         highPrice: false,
         lowPrice: false,
         hotDiscount: false,
         mostView: true,
      },
      filter: {
         filters: null,
         isFiltering: false,
      },
   },
   reducers: {
      toggleAlphabetSort(state) {
         state.sort.name = !state.sort.name
      },
      toggleFilterSort(state, action) {
         const filterType = action.payload
         Object.entries(state.sort)
            .filter(([key, value]) => key !== "name" && key !== filterType)
            .forEach(([key, value]) => (state.sort[key] = false))
         state.sort[filterType] = !state.sort[filterType]
      },
      loadFilter(state, action) {
         const filters = action.payload
         if (!Array.isArray(filters)) return
         state.filter.filters = filters.map(
            (filter) => new CriteriaFilter(filter.filterName, filter.criteria)
         )
      },
      toggleCriteriaFilter(state, action) {
         const { filterIndex, criteriaIndex } = action.payload

         const updatedFilters = state.filter.filters.map((filter, index) => {
            if (index === filterIndex) {
               const criteria = filter.criteria
               // set active for each criteria, if index is match then reverse its value,
               // else set it to false
               criteria.forEach(
                  (criteria, index) =>
                     (criteria.active = index === criteriaIndex ? !criteria.active : false)
               )
               // set active for filter to true if at least one of its criteria is active
               // else set it to false
               filter.active = criteria.some((criteria) => criteria.active === true)
            }
            return filter
         })

         state.filter = {
            filters: updatedFilters,
            isFiltering: updatedFilters.some((filter) => filter.active === true),
         }
      },
      removeCriteriaFilter(state, action) {
         const removedFilter = action.payload

         const updatedFilters = state.filter.filters.map((filter) => {
            if (filter === removedFilter || removedFilter === null) {
               filter.active = false
               filter.criteria.forEach((criteria) => (criteria.active = false))
            }
            return filter
         })

         state.filter = {
            filters: updatedFilters,
            isFiltering: updatedFilters.some((filter) => filter.active === true),
         }
      },
   },
})

export const filterAction = productFilterSlice.actions

export default productFilterSlice
