const mnountain1 = document.getElementById('mnountain1')
const mnountain2 = document.getElementById('mnountain2')
const mnountain3 = document.getElementById('mnountain3')
const mnountain4 = document.getElementById('mnountain4')




const move = () => {
    const scrollY = window.scrollY;
    mnountain1.style.bottom = 40 + scrollY * 0.1 + '%'
    mnountain2.style.right = 30 + scrollY * 0.1 + '%'
    mnountain3.style.left = 30 + scrollY * 0.1 + '%'
    mnountain4.style.bottom = 30 + scrollY * 0.2 + '%'

}

window.addEventListener('scroll', move)
