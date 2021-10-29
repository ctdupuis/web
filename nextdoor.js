const randomRecommend = () => {
    let eateries = document.querySelectorAll('li.eat');
    let random = Math.floor(Math.random() * ((eateries.length - 1) - 0 ) + 0)
    let result = eateries[random].children[0].text
    alert(`Go check out ${result}!`)

}

document.getElementById('random').addEventListener('click', randomRecommend)