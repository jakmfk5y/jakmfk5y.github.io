let reasonButton = document.querySelector('#contact-select')
console.log(reasonButton.innerHTML)

reasonButton.addEventListener('click', function() {
})











function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


let menuLinks = document.querySelectorAll('.nav-btn')
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', async function() {
  if(!menuOpen) {
    document.querySelector('.nav-content').style.display = "grid"
    await sleep(10)
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('.nav').classList.add('open')
    document.querySelector('.nav-content').classList.add('open')
    
    await sleep(200)
    console.log(menuLinks)
    for(let i = 0; i < menuLinks.length; i++) {
        await sleep(30)
        menuLinks[i].classList.add('open')
    }
  } else {
    

    console.log(menuLinks)
    for(let i = 0; i < menuLinks.length; i++) {
        await sleep (25)
        menuLinks[menuLinks.length - i - 1].classList.remove('open')
    }
    document.querySelector('.nav').classList.remove('open')
    document.querySelector('.nav-content').classList.remove('open')
    menuBtn.classList.remove('open');
    await sleep(320)
    document.querySelector('.nav-content').style.display = "none"
    
    
    menuOpen = false;
  }
});


