const heroes = [
    {
        name: 'Slate Slabrock',
        type: 'dwarf',
        damage: 5,
        health: 100
    },
    {
        name: 'Flint Ironstag',
        type: 'elf',
        damage: 10,
        health: 50
    }
]

const boss = {
    health: 100,
    maxHealth: 100,
    damage: 5,
    level: 1,
    loot: 50
}

let killCount = 0
let gold = 0

// function slateAttack() {
//     let attack = heroes.find(hero => hero.damage == 5)

// }

function attackCombo() {
    // find heroes damage
    // add heroes damage together
    // // remove that from boss health
    let slateDamage = heroes[0].damage
    let flintDamage = heroes[1].damage
    let fullStrength = slateDamage + flintDamage
    //  let bossHealth = boss.health
    // for(let i=0; i<=boss.health; i++) {
    //     let bossHealth 
    // }

    boss.health = boss.health - fullStrength
    console.log(boss.health)

    if (boss.health <= 0) {
        boss.health = 0
        bossKilled()
        // lootDay()
        lvlBoss()
    }
    updateBoss()
    // for (let i = 0; i <= heroes.length; i++) {
    //     console.log(i)
    // }

}

function retaliation() {
    let bossDamage = boss.damage

    let slateHealth = heroes[0].health
    let flintHealth = heroes[1].health
    // for (let i = 0; i <= heroes.length; i++) {

    heroes[0].health = (heroes[0].health - bossDamage).toFixed(2)
    heroes[1].health = (heroes[1].health - bossDamage).toFixed(2)
    console.log(slateHealth, flintHealth)
    updateHeroes()
}

function updateHeroes(hero) {
    // let letBossElem = document.getElementById('bossStats')
    // let marquee1 = letBossElem.querySelector('.marquee1')
    // let marquee2 = letBossElem.querySelector('.marquee2')
    debugger
    let heroStatsElem = document.getElementById(`${hero.name}Stats`)
    heroStatsElem.innerText = `${hero.name}
    <p>Health: ${(hero.health).toFixed(0)} </p>
    <p>Damage: ${(hero.damage).toFixed(0)} </p> <p>Level ${hero.level} </p>`
}
function updateBoss() {
    // let letBossElem = document.getElementById('bossStats')
    // let marquee1 = letBossElem.querySelector('.marquee1')
    // let marquee2 = letBossElem.querySelector('.marquee2')

    let bossStatsElem = document.getElementById('bossStats')
    bossStatsElem.innerText = `Health: ${(boss.health).toFixed(0)} | Damage: ${(boss.damage).toFixed(0)} | Level ${boss.level}`
}

function bossKilled() {
    let kills = 0

    if (boss.health <= 0) {
        boss.health = 0
        killCount++
        gold += boss.loot
    }

    killCount += kills
    console.log(kills, 'he dead')

    document.getElementById('kills').innerText = killCount.toString()
    document.getElementById('gold').innerText = gold.toString
}

function healHero(heroName) {
    // let slateHealth = heroes[0].health
    // let flintHealth = heroes[1].health
    let foundHero = heroes.find(hero => hero.name == heroName)
    if (foundHero.health < (foundHero.health * 1)) {
        foundHero.health + (foundHero.health * 0.15)
    } else if (foundHero.health >= foundHero.health)
        return foundHero.health

    //     heroes[0].health = (heroes[0].health + (heroes[0] * .15)).toFixed(2)
    // heroes[1].health = (heroes[1].health + (heroes[1] * .15)).toFixed(2)
}

// function lootDay() {
//     let purse = 0

//     if (boss.health <= 0) {
//         boss.health = 0
//         purse = (boss.loot)
//     }
//     gold += purse


// debugger
//     document.getElementById('gold').innerText = gold.toString()


//     // console.log(purse, gold)
// }


function lvlBoss() {
    boss.maxHealth = boss.maxHealth * 1.2
    boss.health = boss.maxHealth
    boss.damage = (boss.damage * 1.1) + 1
    boss.level = boss.level + 1
    boss.loot = (boss.loot * 1.7).toFixed(2)
}
setInterval(attackCombo, 1000)
setInterval(retaliation, 5000)
//