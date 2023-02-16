function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', function() {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    document.querySelector('.nav').classList.add('open')
    document.querySelector('.nav-content').classList.add('open')
  } else {
    document.querySelector('.nav').classList.remove('open')
    document.querySelector('.nav-content').classList.remove('open')
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }



let progressEnd = document.querySelector('#section5').getBoundingClientRect().top + window.scrollY

function setCircle(x, y) {
    let progressCircle = document.querySelector('#prg-circle-fill2')

    progressCircle.style.strokeDashoffset = (565 - (565 * ((x / y) * 100)) / 100)
}

window.addEventListener('scroll', function() {
    let scrollDifference = Math.floor(progressEnd / 12)

    let z = Math.ceil(this.window.scrollY / scrollDifference)
    if( z <= 12) {
        this.document.querySelector('#method-quan-number').innerHTML = `${z} / 12`
        setCircle(z, 12)
    }

    

    if(this.window.scrollY <= progressEnd) {
        
    }
    else {
        setCircle(1, 1)
    }
    
    console.log(window.scrollY)
    if(getOffset(document.querySelector('#section1')).top < getOffset(document.querySelector('.app-box')).top) {
        document.querySelector('#app-method-header').innerHTML = 'Refresh all'
    }
    if(getOffset(document.querySelector('#section2')).top < getOffset(document.querySelector('.app-box')).top) {
        document.querySelector('#app-method-header').innerHTML = 'Refresh all'
        document.querySelector('#method-type').innerHTML = 'Refreshing items'
        document.querySelector('#method-quan').innerHTML = ' items refreshed'
        document.querySelector('.prg-item-img').src = `https://img.freepik.com/premium-vector/vector-illustration-skirts-women-s-clothes-skirt-vector-sketch-illustration_231873-1827.jpg?w=740`
        
    }
    if(getOffset(document.querySelector('#section3')).top < getOffset(document.querySelector('.app-box')).top) {
        document.querySelector('#app-method-header').innerHTML = 'Discount'
        document.querySelector('#method-type').innerHTML = 'Changing prices'
        document.querySelector('#method-quan').innerHTML = ' prices changed'
        document.querySelector('.prg-item-img').src = `https://img.freepik.com/premium-vector/vector-illustration-skirts-women-s-clothes-skirt-vector-sketch-illustration_231873-1827.jpg?w=740`

    }
    if(getOffset(document.querySelector('#section4')).top < getOffset(document.querySelector('.app-box')).top) {
        document.querySelector('#app-method-header').innerHTML = 'Follow'
        document.querySelector('#method-type').innerHTML = 'Following users'
        document.querySelector('#method-quan').innerHTML = ' users followed'
        document.querySelector('.prg-item-img').src = `user.jpg`

    }
    if(getOffset(document.querySelector('#section5')).top < getOffset(document.querySelector('.app-box')).top) {
        document.querySelector('#app-method-header').innerHTML = 'Like'
        document.querySelector('#method-type').innerHTML = 'Liking items'
        document.querySelector('#method-quan').innerHTML = ' items liked'
        document.querySelector('.prg-item-img').src = `user.jpg`
        
    }

    
    


})



let lists = document.querySelectorAll('.faq-elements')
let responses = document.querySelectorAll('.faq-response')
let icons = document.querySelectorAll('.faq-svg')
console.log(responses)
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

