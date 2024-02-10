const inputGears = document.getElementById("inputGears")
const innerContainer = document.querySelector(".inner")
const button = document.querySelector(".searchBtn")
const listGear = document.querySelector(".listGear")
const api = "https://jsonplaceholder.typicode.com/users"
const gearsJson = "http://localhost:3000/gears"

async function showUsers() {
	try {
		const response = await fetch(gearsJson)

		if (response.ok) {
			const data = await response.json()

			createList(data)
		} else {
			console.log("Error HTTP: " + response.status)
		}
	} catch (error) {
		console.log("Ошибка получения данных: " + error.message)
	}
}

function createList(usersData) {
	usersData.forEach((usersData) => {
		const list = `
				
		
		<div class="listGear">
			<div class="nameGear">${usersData.gearsName}</div>
			<div class="descriptionGear">${usersData.description}</div>
		</div>
	
				
			`
		innerContainer.insertAdjacentHTML("beforeEnd", list)
	})
}

button.addEventListener("click", function () {
	if (innerContainer.childElementCount > 0) {
		innerContainer.innerHTML = ""
	} else {
		showUsers()
	}
})
