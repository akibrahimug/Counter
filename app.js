const count = document.querySelector('h3');
// const operator = document.querySelector('.operator')
const minus = document.querySelector('.minus')
const add = document.querySelector('.add')


let num = 0;
// operator.addEventListener('click', e => {
//     count.textContent = num;
//     if(e.target === minus){
//         num -= 1;
//         if(num < '0'){count.style.color = '#ff002b'}
//         console.log(num)
//     }else if(e.target === add){
//         num += 1;
//         if(num > '0'){count.style.color = '#0084ff'}
//         console.log(num)
//     }
   
// })

const remove1 = () => {
    num--;
    count.innerHTML = num;
    if(count.innerHTML < 0){
        count.style.color = '#ff002b'
    }else if(count.innerHTML === '0'){
        count.style.color = 'white'
    }
}

const increase1 = () => {
    num++;
    count.innerHTML = num;
    if(count.innerHTML > 0){
        count.style.color = '#0084ff'
    }else if(count.innerHTML === '0'){
        count.style.color = 'white'
    }
}

minus.addEventListener('click', remove1);
add.addEventListener('click', increase1);