export function mapClassNames(classes) {
   return Object.entries(classes)
      .filter(([className, condition]) => condition)
      .map(([className, condition]) => className)
      .join(" ")
}

export function concatClassNames(classes = []) {
   return classes.filter((className) => !!className).join(" ")
}
