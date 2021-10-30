let items = document.querySelectorAll('.growth__number')
let block = document.querySelector('.growth__blocks')
let is_counter = false


window.addEventListener('scroll', () => {
    if(checkPos() && is_counter == false) {
        counter()
        is_counter = true
    }
})

const checkPos = () => {
    if (block.getBoundingClientRect().top - window.innerHeight <= -400) { 
        return true
    }
    return false
}

const counter = () => {
    if(items[0].innerHTML*1 < items[0].getAttribute('data-number')*1) {
        items.forEach(el => {
            el.innerHTML = el.innerHTML*1 + Math.ceil(el.getAttribute('data-number') * 0.01)
        })

        setTimeout(counter, 20)
    }
}

