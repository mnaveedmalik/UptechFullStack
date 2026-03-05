const API = "https://dummyjson.com/users"

const table = document.getElementById("table")
const form = document.getElementById("form")
const modal = document.getElementById("modal")
const pageMsg = document.getElementById("pageMsg")

let users = []
let page = 1
let limit = 5
let editingId = null

// FETCH USERS
async function getUsers() {
    const res = await fetch(API)
    const data = await res.json()
    users = data.users
    renderUsers()
}

// RENDER USERS
function renderUsers() {
    table.innerHTML = ""

    let start = (page - 1) * limit
    let end = start + limit
    let pageUsers = users.slice(start, end)

    if (pageUsers.length === 0) {
        pageMsg.innerText = "No more users"
        return
    }

    pageMsg.innerText = ""

    pageUsers.forEach(user => {
        let row = document.createElement("tr")
        row.className = "border-b hover:bg-gray-100"

        row.innerHTML = `
<td class="p-2">${user.id}</td>
<td>${user.firstName}</td>
<td>${user.lastName}</td>
<td>${user.email}</td>
<td>${user.phone}</td>
<td class="space-x-2">
<button onclick="openEdit(${user.id})"
class="btn bg-yellow-400 hover:bg-yellow-500">
Edit
</button>
<button onclick="deleteUser(${user.id})"
class="btn bg-red-500 text-white hover:bg-red-700">
Delete
</button>
</td>
`

        table.appendChild(row)
    })
}

// ADD USER
form.addEventListener("submit", async function (e) {
    e.preventDefault()

    let first = document.getElementById("firstName").value
    let last = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value

    if (!first || !last || !email || !phone) {
        alert("Please fill all fields")
        return
    }

    const res = await fetch(API + "/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: first, lastName: last, email, phone })
    })

    const newUser = await res.json()

    // Generate correct ID (sequential)
    const newId = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1
    newUser.id = newId

    // ✅ ADD TO THE END OF ARRAY so pagination works naturally
    users.push(newUser)

    // Go to last page automatically to see new user
    page = Math.ceil(users.length / limit)

    renderUsers()
    form.reset()
    alert("User added successfully")
})

// DELETE USER
async function deleteUser(id) {
    if (!confirm("Delete user?")) return

    await fetch(API + "/" + id, { method: "DELETE" })
    users = users.filter(u => u.id !== id)

    // Adjust page if last page becomes empty
    const totalPages = Math.ceil(users.length / limit)
    if (page > totalPages) page = totalPages

    renderUsers()
}

// OPEN MODAL
function openEdit(id) {
    editingId = id
    modal.classList.remove("hidden")
    modal.classList.add("flex")

    let user = users.find(u => u.id === id)
    editFirst.value = user.firstName
    editLast.value = user.lastName
    editEmail.value = user.email
    editPhone.value = user.phone
}

// CLOSE MODAL
function closeModal() {
    modal.classList.add("hidden")
}

// UPDATE USER
updateBtn.onclick = async function () {
    let first = editFirst.value
    let last = editLast.value
    let email = editEmail.value
    let phone = editPhone.value

    await fetch(API + "/" + editingId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: first, lastName: last, email, phone })
    })

    let user = users.find(u => u.id === editingId)
    user.firstName = first
    user.lastName = last
    user.email = email
    user.phone = phone

    renderUsers()
    closeModal()
}

// PAGINATION
next.onclick = function () {
    const totalPages = Math.ceil(users.length / limit)
    if (page < totalPages) {
        page++
        renderUsers()
    } else {
        pageMsg.innerText = "No more users"
    }
}

prev.onclick = function () {
    if (page > 1) {
        page--
        renderUsers()
    }
}

// INITIAL LOAD
getUsers()