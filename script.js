const buttonPlay = document.querySelector(".play")
const buttonPause = document.querySelector(".pause")
const buttonStop = document.querySelector(".stop")
const buttonSet = document.querySelector(".set")
const buttonSoundOn = document.querySelector(".sound-on")
const buttonSoundOff = document.querySelector(".sound-off")

buttonPlay.addEventListener("click", () => {
    buttonPlay.classList.add("hide")
    buttonPause.classList.toggle("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
})

buttonPause.addEventListener("click", () => {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
})

buttonStop.addEventListener("click", () => {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonStop.classList.add("hide")
})

buttonSoundOff.addEventListener("click", () => {
    buttonSoundOn.classList.remove("hide")
    buttonSoundOff.classList.add("hide")
})

buttonSoundOn.addEventListener("click", () => {
    buttonSoundOff.classList.remove("hide")
    buttonSoundOn.classList.add("hide")
})