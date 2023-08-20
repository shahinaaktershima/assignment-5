// show the card name into a new div
function textShow(id){
const parent=document.getElementById('card-name');
const count =parent.childElementCount;
const item=document.getElementById(id).innerText;
const p =document.createElement('p');
p.classList.add('font-bold');
p.innerHTML=`${count} ${item}`;
parent.appendChild(p);
}
// add all cards price to total
function totalPriceCalculation(id){
    const totalPrice=document.getElementById('total-price');
    const remainingTotal=document.getElementById('total');
    const totalPriceValue =parseFloat(totalPrice.innerText);
const price =document.getElementById(id).innerText;
const pricevalue=parseFloat(price);
const total =totalPriceValue+pricevalue;
const totalFixed=total.toFixed(2);
totalPrice.innerText =totalFixed;
remainingTotal.innerText =totalFixed;
addDisabled();
}
// discount section
document.getElementById('apply').addEventListener('click',function(){
    const promoCode=document.getElementById('code').textContent;
    const firstInput=document.getElementById('coupon');
    const input=firstInput.value;
    if(input===promoCode){
        firstInput.value='';
        const totalPrice=document.getElementById('total-price');
        const remainingTotal=document.getElementById('total');
        const discount=document.getElementById('discount');
        const discountValue=parseFloat(totalPrice.innerText)*(20/100);
        const discountFixed=discountValue.toFixed(2)
        discount.innerText=discountFixed;
        const total=parseFloat(totalPrice.innerText)-discountValue;
        const totalFixed=total.toFixed(2);
        remainingTotal.innerText=totalFixed;
        
    }
    else{
        alert('please provide the right code');
        firstInput.value='';
    }
})

// create new modal 
document.getElementById('close').addEventListener('click',function(){
 document.getElementById('total-price').innerText='0.00';
 document.getElementById('discount').innerText='0.00';
 document.getElementById('total').innerText='0.00';
 document.getElementById('card-name').textContent='';
})