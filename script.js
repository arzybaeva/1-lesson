const btn=document.querySelectorAll('.btn')
const circle=document.querySelector('.circle')


btn.forEach((el,idx)=>{
    el.addEventListener('click',()=>{
if(idx===0){
    circle.style.marginBottom='10px'
circle.style.transition='0.5s'
} else if(idx===1){
    circle.style.marginBottom='55px'

}else if(idx===2){
    circle.style.marginBottom='100px'
circle.style.transition='0.5s'
}else if(idx===3){
    circle.style.marginBottom='145px'
circle.style.transition='0.5s'
}else if(idx===4){
    circle.style.marginBottom='190px'
circle.style.transition='0.5s'
}else if(idx===5){
    circle.style.marginBottom='235px'
circle.style.transition='0.5s'
}else if(idx===6){
    circle.style.marginBottom='280px'

} else if(idx===7){
    circle.style.marginBottom='325px'
   circle.style.transition='0.5s' 
}
    })
})