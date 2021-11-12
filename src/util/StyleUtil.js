export function mapClassNames(classes) {
   return Object.entries(classes)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
      .join(" ")
}

export function concatClassNames(classes = []) {
   return classes.filter((className) => !!className).join(" ")
}
