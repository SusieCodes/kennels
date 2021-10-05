const remoteURL = "http://localhost:5002"

export const getCustomerById = (customerId) => {
  return fetch(`${remoteURL}/customers/${customerId}?_embed=animal`)
  .then(res => res.json())
}

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers?_embed=animal`)
  .then(res => res.json())
}

export const deleteCustomer = (id) => {
  return fetch(`${remoteURL}/customers/${id}`, {
    method: "DELETE"
  }).then(result => result.json())
}