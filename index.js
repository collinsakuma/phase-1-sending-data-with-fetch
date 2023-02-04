// Add your code here
function submitData(userName, userEmail) {
    const bodyTag = document.querySelector('body')
    const formatData = {
        name: userName,
        email: userEmail
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formatData),
    })
    .then(res => res.json())
    .then(data => bodyTag.textContent = data.id)
    .catch(error => bodyTag.textContent = error.message)
}
