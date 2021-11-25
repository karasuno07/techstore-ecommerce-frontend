export const NumberFormatter = (locale, currencyUnit) => {
   return new Intl.NumberFormat(locale, { style: "currency", currency: currencyUnit })
}
