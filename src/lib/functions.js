export const searchForContact = (companies, text) => {
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
