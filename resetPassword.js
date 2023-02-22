let reset = document.querySelector('#reset-button')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
reset.addEventListener('click', async function() {
    document.querySelector('.email-sent').style.display = "flex"
    await sleep(2000)
})


document.querySelector('#go-back-button').addEventListener('click', function() {
    document.querySelector('.email-sent').style.display = "none"

})
