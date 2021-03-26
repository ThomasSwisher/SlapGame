
let health = 100
let enHealth = 100
let p1count = 0
//let actions = [`slap`, `kick`, `punch`]

function player2() {
    let options = [
        { name: 'slap', damage: 1 },
        { name: 'punch', damage: 5 },
        { name: 'kick', damage: 10 }
    ]
    // let slap = 1
    // let kick = 5
    // let punch = 10
    let randomIndex = Math.floor(Math.random() * options.length)
    // if (compChoice == slap) { slap + enHealth }
    // console.log(compChoice)
    let compAttack = options[randomIndex]
    // console.log(compAttack.name + compAttack.damage)
    let compAttack - enHealth
}

function slap() {
    health = health - 2;
    p1count = p1count + 1;
    update()
    player2()
}

// function work() {
//     let compChoice = actions[Math.floor(Math.random() * actions.length)]
//     console.log(compChoice)
//     actions[compChoice]()
// }
// work()


function kick() {
    health = health - 5;
    p1count = p1count + 1;
    update()

}


function punch() {
    health = health - 10;
    p1count = p1count + 1;
    update()

}

function alert() {

}


function update() {
    //let template = ``
    //tempate += //`<h6 class="score">${health}</h6>`
    document.getElementById('playerOne').innerText = health
    document.getElementById('playerTwo').innerText = enHealth
    document.getElementById('p1hits').innerText = p1count

}



// slap()
update()