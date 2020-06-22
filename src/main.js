import string from './style.js'
//用对象封装
const player = {
    n: 0,
    runTime: 100,
    id: undefined,
    init: () => {
        player.play()
        player.bindEvents()
    },
    events: {
        "#btnPause": "pause",
        "#btnPlay": "play",
        "#fastPlay": "fast",
        "#slowPlay": "slow",
    },
    bindEvents: () => {
        console.log("BDL")
        for (let key in player.events) {
            //有可能遍历到继承的属性，防御性编程
            if (player.events.hasOwnProperty(key)) {
                let value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
        //将以下代码封装
        // document.querySelector("#btnPause").onclick = player.pause
        // document.querySelector("#btnPlay").onclick = player.play
        // document.querySelector("#fastPlay").onclick = player.fast
        // document.querySelector("#slowPlay").onclick = player.slow
    },
    play: () => {
        console.log(player.runTime)
        player.id = setInterval(player.run, player.runTime);
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    run: () => {
        if (player.n < string.length) {
            player.n += 1
            let content = string.substring(0, player.n)
            codeStyle.innerHTML = content
            codeHtml.innerText = content
            codeHtml.scrollTop = 999999
        } else {
            clearInterval(player.id)
            return
        }
    },
    slow: () => {
        player.runTime = 200
        player.pause()
        player.play()
    },
    fast: () => {
        player.runTime = 0
        player.pause()
        player.play()
    }
}
player.init()
//原来的代码
// let play = () => {
//     return setInterval(run, runTime);
// }
// let pause = () => {
//     window.clearInterval(id)
// }
// let slow = () => {
//     runTime = 200
//     pause()
//     id = play()
// }
// let fast = () => {
//     runTime = 0
//     pause()
//     id = play()
// }

// let run = () => {
//     if (n < length) {
//         n += 1
//         let content = string.substring(0, n)
//         codeStyle.innerHTML = content
//         codeHtml.innerText = content
//         codeHtml.scrollTop = 999999
//     } else {
//         clearInterval(id)
//         return
//     }
// }