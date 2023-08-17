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

function slateAttack() {
    let attack = heroes.find(hero => hero.damage == 5)

}

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
        lootDay()
        lvlBoss()
    }
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
}

function bossKilled() {
    let kills = 0

    if (boss.health <= 0) {
        boss.health = 0
        killCount++
    }
    killCount += kills
    console.log(kills, 'he dead')

    document.getElementById('kills').innerText = killCount.toString()
}

function lootDay() {
    let purse = 0
    debugger
    purse += (boss.loot)
    gold += purse
    console.log(purse)

    document.getElementById('gold').innerText = killCount.toString()


    console.log(purse, gold)
}


function lvlBoss() {
    boss.maxHealth = boss.maxHealth * 1.2
    boss.health = boss.maxHealth
    boss.damage = (boss.damage * 1.1) + 1
    boss.level = boss.level + 1
    boss.loot = (boss.loot * 1.7).toFixed(2)
}
setInterval(attackCombo, 1000)
setInterval(retaliation, 1000)
//