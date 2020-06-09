const card = document.querySelector(".card")
const input = document.querySelector(".form__input")
const form = document.querySelector(".form")
const img = document.querySelector(".card__img")
const imgLink = document.querySelector(".card__img-link")
const usernameLink = document.querySelector(".usernameLink")
const errorh3 = document.querySelector(".form-error")
const username = document.querySelector(".username")
const realName = document.querySelector(".realName")
const locationDl = document.querySelector(".location")
const publicRepos = document.querySelector(".publicRepos")
const followers = document.querySelector(".followers")


card.style.display = "none"

async function getUser() {
    if (input.value) {
        try {
            const endpoint = await fetch(`https://api.github.com/users/${input.value}`);
            const data = await endpoint.json();
            if (data.login) {
                showUsers(data);
                console.log(data)
            } else {
                console.log("error")
                showError()
            }

        } catch (error) {
            console.log(error)

        }
        input.value = ""

    } else {
        errorh3.style.display = "block"
        card.style.display = "none"
        errorh3.innerHTML = "No ingresó ningún usuario"
    }
}

function showUsers(data) {
    errorh3.style.display = "none"
    card.style.display = "inline-block"
    img.src = data.avatar_url
    imgLink.href = `https://github.com/${input.value}`
    username.innerHTML = data.login
    usernameLink.href = `https://github.com/${input.value}`
    realName.innerHTML = data.name
    locationDl.innerHTML = data.location
    publicRepos.innerHTML = data.public_repos
    followers.innerHTML = data.followers

}

function showError() {
    errorh3.style.display = "block"
    card.style.display = "none"
    errorh3.innerHTML = "El usuario ingresado no existe"
}


form.addEventListener("submit", getUser)