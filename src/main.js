import string from './style.js'
const length = string.length
let runTime = 100
let n = 0
let play = () => {
    return setInterval(run, runTime);
}
let pause = () => {
    window.clearInterval(id)
}
let run = () => {
    if (n < length) {
        n += 1
        let content = string.substring(0, n)
        codeStyle.innerHTML = content
        codeHtml.innerText = content
        codeHtml.scrollTop = 999999
    } else {
        clearInterval(id)
        return
    }
}
let id = play()
btnPause.onclick = () => {
    pause()
}
btnPlay.onclick = () => {
    id = play()
}
fastPlay.onclick = () => {
    runTime = 0
    pause()
    id = play()
}
slowPlay.onclick = () => {
    runTime = 200
    pause()
    id = play()
}


