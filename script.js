const container = document.querySelector('.container')

document.querySelector('.open-navbar-icon').addEventListener('click', () => {
    container.classList.add('change');
})

document.querySelector('.close-navbar-icon').addEventListener('click', () => {
    container.classList.remove('change');
})












const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];



Array.from(document.querySelectorAll('.nav-link')).forEach((item, index) => {
    item.style.cssText = `background-color: ${colors[index]};`
})














Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.toggle("change");
    }
})
