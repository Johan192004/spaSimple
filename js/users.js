import { url } from "./config.js"

export function viewUsers() {


    return `<button type="button" class="btn btn-success h-100 ">Add</button>
    <table class="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody class="table-group-divider">
            </tbody>
          </table>`

  
}

export async function scriptUsers(){

  let response = await fetch(url + "/users")
  let data = await response.json()

  let tbody = document.querySelector("tbody")

  data.forEach(element => {
    tbody.innerHTML += `<tr>
                <th scope="row">${element.id}</th>
                <td>${element.name}</td>
                <td>${element.email}</td>
                <td class="d-flex justify-content-center gap-2"><button type="button" class="btn btn-warning">Edit</button><button type="button" class="btn btn-danger">Delete</button></td>
              </tr>`
  });
}