let cartQuantity=0;
document.querySelector('#cart-summery').innerText=`Your Bag Has 0 Items`;
function counter(){
    cartQuantity+=1;
    document.querySelector('#cart-summery').innerText=`Your Bag Has ${cartQuantity} Items`;
}
function counter2(){
    if(cartQuantity>=1){
    cartQuantity-=1;
    document.querySelector('#cart-summery').innerText=`Your Bag Has ${cartQuantity} Items`;
    }
    else{
        alert('Please Add Somthing In Cart First');
    }
}
function counter3(){
    cartQuantity+=2;
    document.querySelector('#cart-summery').innerText=`Your Bag Has ${cartQuantity} Items`;
}


















// let wlc='helllo krishna';
// console.log(wlc);
// let bgs=54;
// bgs+=3;
// console.log(bgs);