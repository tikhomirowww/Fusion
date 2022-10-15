// let window = window;
console.log(window.innerWidth, 'width');
let widthWin = window.innerWidth;
function changeDesc(){
    let card = document.querySelectorAll('.card');
    // console.log(card);
        card.forEach(item => {
            // console.log(item);
            item.setAttribute('data-aos', 'flip-right')
        })   
}

let date = new Date().getHours();
if(date >= 16){
    document.body.style.backgroundColor
}
console.log(new Date().getHours());
changeDesc()