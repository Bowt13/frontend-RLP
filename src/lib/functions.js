export const searchForOrder = (customers, text) => {
  console.log(text);
  if (text==='') return customers
  const usersFiltered = customers.map(customer => {
    return {
      ...customer,
      orders: customer.orders.filter(order => {
        console.log(order.shortDescription);
        return order.shortDescription.includes(text)
      })
    }
  })
  console.log(usersFiltered);
  console.log(usersFiltered.filter(customer=>
    customer.orders.length > 0))
  return usersFiltered.filter(customer=>
    customer.orders.length > 0
  )
}
