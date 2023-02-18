function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


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
    
    let menuLinks = document.querySelectorAll('.nav-btn')
    await sleep(200)
    console.log(menuLinks)
    for(let i = 0; i < menuLinks.length; i++) {
        await sleep(30)
        menuLinks[i].classList.add('open')
    }
  } else {
    let menuLinks = document.querySelectorAll('.nav-btn')

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


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
      height: rect.height
    };
  }

  document.querySelector('#img1').classList.add('current')


function setCircle(x, y) {
    let progressCircle = document.querySelector('#prg-circle-fill2')

    progressCircle.style.strokeDashoffset = (565 - (565 * ((x / y) * 100)) / 100)
}
window.addEventListener('scroll', function() {
    if(this.window.scrollY >= document.querySelector('#section1').getBoundingClientRect().height - 300) {
        let progressEnd = document.querySelector('#section5').getBoundingClientRect().top + window.scrollY


    
        
    
        if(this.window.scrollY <= progressEnd) {
            
        }
        else {
            setCircle(1, 1)
        }
        
        if((getOffset(document.querySelector('#section2')).top - (getOffset(document.querySelector('#section2')).height)) < getOffset(document.querySelector('.app-box')).top) {
            document.querySelector('#app-method-header').innerHTML = 'Refresh all'
            document.querySelector('#method-type').innerHTML = 'Refreshing items'
            document.querySelector('#method-quan').innerHTML = ' items refreshed'
            document.querySelector('#img1').classList.add('current')
            document.querySelector('#img2').classList.remove('current')
            document.querySelector('#img3').classList.remove('current')
            document.querySelector('#img4').classList.remove('current')
            

            this.document.querySelector('#method-quan-number').innerHTML = `1 / 4`
            setCircle(1, 4)
        }
        if((getOffset(document.querySelector('#section3')).top - (getOffset(document.querySelector('#section3')).height / 2)) < getOffset(document.querySelector('.app-box')).top) {
            document.querySelector('#app-method-header').innerHTML = 'Discount'
            document.querySelector('#method-type').innerHTML = 'Changing prices'
            document.querySelector('#method-quan').innerHTML = ' prices changed'
            document.querySelector('#img1').classList.remove('current')
            document.querySelector('#img2').classList.add('current')
            document.querySelector('#img3').classList.remove('current')
            document.querySelector('#img4').classList.remove('current')
            
            this.document.querySelector('#method-quan-number').innerHTML = `2 / 4`
            setCircle(2, 4)
        }
        if((getOffset(document.querySelector('#section4')).top - (getOffset(document.querySelector('#section4')).height / 2)) < getOffset(document.querySelector('.app-box')).top) {
            document.querySelector('#app-method-header').innerHTML = 'Follow'
            document.querySelector('#method-type').innerHTML = 'Following users'
            document.querySelector('#method-quan').innerHTML = ' users followed'
            document.querySelector('#img1').classList.remove('current')           
            document.querySelector('#img2').classList.remove('current')
            document.querySelector('#img3').classList.add('current')
            document.querySelector('#img4').classList.remove('current')
            this.document.querySelector('#method-quan-number').innerHTML = `3 / 4`
            setCircle(3, 4)
    
        }
        if((getOffset(document.querySelector('#section5')).top - (getOffset(document.querySelector('#section5')).height / 2)) < getOffset(document.querySelector('.app-box')).top) {
            document.querySelector('#app-method-header').innerHTML = 'Like'
            document.querySelector('#method-type').innerHTML = 'Liking items'
            document.querySelector('#method-quan').innerHTML = ' items liked'
            document.querySelector('#img1').classList.remove('current')   
            document.querySelector('#img2').classList.remove('current')
            document.querySelector('#img3').classList.remove('current')
            document.querySelector('#img4').classList.add('current')
            this.document.querySelector('#method-quan-number').innerHTML = `4 / 4`
            setCircle(4, 4)
            
        }
    }
    else {
        this.document.querySelector('#method-quan-number').innerHTML = `0 / 4`
            setCircle(0, 4)
    }
    
    


})



let lists = document.querySelectorAll('.faq-elements')
let responses = document.querySelectorAll('.faq-response')
let icons = document.querySelectorAll('.faq-svg')
for (let i = 0; i < lists.length; i++) {

    
    lists[i].addEventListener('click', function() {
        for(let j = 0; j < lists.length; j++) {
        if(lists[j] != lists[i]) {
            lists[j].classList.remove('is-clicked')
            responses[j].classList.remove('is-clicked')
            icons[j].classList.remove('is-clicked')
        }
        
    }

        icons[i].classList.toggle('is-clicked')
        lists[i].classList.toggle('is-clicked')
        responses[i].classList.toggle('is-clicked')
    })
}

