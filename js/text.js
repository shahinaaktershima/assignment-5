
function textShow(id){
const parent=document.getElementById('card-name');
const count =parent.childElementCount;
const item=document.getElementById(id).innerText;
const p =document.createElement('p');
p.classList.add('font-bold');
p.innerHTML=`${count} ${item}`;
parent.appendChild(p);
}

function totalPriceCalculation(id){
    const totalPrice=document.getElementById('total-price');
    const remainingTotal=document.getElementById('total');
    const totalPriceValue =parseFloat(totalPrice.innerText);
const price =document.getElementById(id).innerText;
const pricevalue=parseFloat(price);
console.log(pricevalue);
const total =totalPriceValue+pricevalue;
const totalFixed=total.toFixed(2);
totalPrice.innerText =totalFixed;
remainingTotal.innerText =totalFixed;
}

document.getElementById('apply').addEventListener('click',function(){
    console.log('clicked');
    const promoCode=document.getElementById('code').textContent;
    console.log(promoCode)
    const input=document.getElementById('coupon').value;
    console.log(input); 
    if(input===promoCode){
        const totalPrice=document.getElementById('total-price');
        const remainingTotal=document.getElementById('total');
        const discount=document.getElementById('discount');
        const discountValue=parseFloat(totalPrice.innerText)*(20/100);
        console.log(discountValue);
        const discountFixed=discountValue.toFixed(2)
        discount.innerText=discountFixed;
        const total=parseFloat(totalPrice.innerText)-discountValue;
        const totalFixed=total.toFixed(2);
        remainingTotal.innerText=totalFixed;
    }
    else{
        alert('please provide the right code');
    }
})