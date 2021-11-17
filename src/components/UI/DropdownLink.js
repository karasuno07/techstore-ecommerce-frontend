import React from "react"
import { Link } from "react-router-dom"

const DropdownLink = React.forwardRef(({ href, children, ...props }, ref) => {
   return (
      <Link ref={ref} to={href} {...props}>
         {children}
      </Link>
   )
})

export default DropdownLink
