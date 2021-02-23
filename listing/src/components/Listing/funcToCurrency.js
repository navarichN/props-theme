const toCurrency = (price, nameOfCurr = 'USD', localFormat) => {
    return new Intl.NumberFormat(localFormat, {
      currency: nameOfCurr,
      style: 'currency'
    }).format(price)
}
export default toCurrency;