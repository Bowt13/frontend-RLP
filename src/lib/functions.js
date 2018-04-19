export const searchForOrder = (orders, text) => {
  console.log(text);
  if (text==='') return orders
  console.log(orders)
  return orders.filter(order =>
    order.shortDescription.includes(text)
  )
 }


export const searchForContact = (companies, text) => {
 console.log(companies, text);
 if (text==='') return companies
  const usersFiltered = companies.map(company => {
    return {
      ...company,
      users: company.users.filter(user => (
        user.firstName.includes(text) || user.lastName.includes(text))
      )
    }
  })
  return usersFiltered.filter(company=>
    company.users.length > 0
  )
}
