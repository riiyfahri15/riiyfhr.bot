const pertanyaan = document.getElementById('pertanyaan');
const jawaban = document.getElementById('jawaban');
const loader = document.getElementById('loader');
const container = document.getElementsByClassName('container');
let init = 0

const botSay = (data) => {
    return [
        'Hallo, perkenalkan nama saya riiy-bot. siapa nama kamu ? 😉',
        `Hai ${data?.nama}, berapa umur kamu ?`,
        `oohh ${data?.usia}, hobi kamu apa ya..?`,
        `waah ${data?.hobby}, menarik juga hobi kamu ya, btw kamu kelas berapa ?`,
        `oooh, kelas ${data?.kelas}, oke, udahan ya ?`,
    ]

}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    if(jawaban.value.length < 1) return alert('SILAHKAN JAWAB TERLEBI DAHULU');
    init++
    if (init === 1) {
        console.log()
        botDelay({ nama: jawaban.value })
    }
    else if (init === 2) {
        botDelay({ usia: jawaban.value })
    }
    else if (init === 3) {
        botDelay({ hobby: jawaban.value })
    }
    else if (init === 4) {
        botDelay({ kelas: jawaban.value })
    }
    else if (init === 5) {
        finishing()
    }
    else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    loader.style.display = 'block'
    container[0].style.filter = 'blur(8px)'
    setTimeout (() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
        loader.style.display = 'none'
        container[0].style.filter = 'none'
    }, [1000])
    usersData.push(jawaban.value)
    jawaban.value = ''
}

function finishing() {
    pertanyaan.innerHTML = `makasih ya ${usersData[0]} udah mampir ke riiy-bot, kapan-kapan kita ${usersData[2]} bareng ya 😍🔥`
    jawaban.value = 'siap sama-sama 🔥🔥'
}

function botEnd() {
    alert(
        `TERIMA KASIH ${usersData[0]} SUDAH BERKUNJUNG 🙌`);
    window.location.reload()
}