
let card = document.querySelectorAll('.card')
let gridIncr = 0;

//card.forEach((item) => {
//    item.style.gridArea = `${gridArr[gridIncr]}`
//    gridIncr++;
//})

let body = document.querySelector('body')
let cardsContainer = document.querySelector('.cards-container')
let cardDiv = document.querySelectorAll('.card')
let cardTitle = document.querySelectorAll('.card-title')
let cardTab = document.querySelector('.card-tab')
//console.log(cardDiv)

let apiFetch = fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < 16; i++) {
            let gridArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p']

            //creating my individual card divs and appending to my page
            let cardDiv = document.createElement('div')
            cardDiv.classList.add('card')
            let cardTitle = document.createElement('p')
            console.log(cardDiv)
            cardTitle.classList.add('card-title')
            cardsContainer.appendChild(cardDiv)
            cardDiv.appendChild(cardTitle)
            cardDiv.style.backgroundImage = `url(${data.results[i].image})`
            cardTitle.innerText = `${data.results[i].name}`

            //creating my cardTab with event listener
            let newCardTab = document.createElement('div')
            newCardTab.classList.add('card-tab')
            let bioDiv = document.createElement('div')
            bioDiv.classList.add('bio-div', 'tab-content')
            bioDiv.innerHTML = `
            <h3>${data.results[i].name}</h3>
            <ul>
            <li>${data.results[i].status}</li>
            <li>${data.results[i].species}</li>
            </ul>
            `
            let tabImg = document.createElement('img')
            tabImg.classList.add('tab-img', 'tab-content')
            tabImg.src = data.results[i].image
            body.appendChild(newCardTab)
            newCardTab.appendChild(tabImg)
            newCardTab.appendChild(bioDiv)
            newCardTab.setAttribute('data-div-letter', `${gridArr[i]}`)
            console.log(newCardTab)
            let closeTab = document.createElement('button')
            closeTab.classList.add('closeTab')
            closeTab.innerText = 'X'
            newCardTab.appendChild(closeTab)

            let cardEvent = () => {
                newCardTab.classList.add('tab-event')
                cardsContainer.classList.add('card-event')
                console.log('hello')
            }
            cardDiv.addEventListener('click', cardEvent)
            let closeTabFunc = () => {
                newCardTab.classList.remove('tab-event')
                cardsContainer.classList.remove('card-event')
            }
            closeTab.addEventListener('click', closeTabFunc)
        } } )
//.then(data => data.results.forEach((item) => {
//   let card = document.createElement('div')
//   card.classList.add('card')
//   let cardTitle = document.createElement('div')
//   cardTitle.classList.add('card-title')
//   cardsContainer.appendChild(card)
//   
//   console.log(card)
//   console.log(item)
//let character = new Card(item.name, item.image, item.species)
//console.log(character)
//console.log(fetchedArr)
//console.log(fetchedArr[0])
//    }
//    ))
//console.log(data.results[0]))//
//for (let i = 0; i < 12; i++) {
//    let card = document.createElement('div')
//    let cardTitle = document.createElement('div')
//    card.style.backgroundImage = `${fetchedArr[i].image}`
//    console.log(card)
//}


