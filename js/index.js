// purchase button disabled when total price <0;
const btnPurchase=document.getElementById('purchase');
    let purchase =document.getElementById("total-price").innerText;
    let value=parseFloat(purchase);
    if(value<=0){
        btnPurchase.disabled=true;
    }
    else{
        btnPurchase.disabled=false;
    }
    // apply button enabled when total price >200;
    const btnApply=document.getElementById('Apply');
   if(value<=200){
    btnApply.disabled=true;
   }
   else{
    btnApply.disabled=false;
   }
// total price of all cards

const apply=document.getElementById('apply');
const totalPice =document.getElementById('total-price');
if(totalPice>=200){
    apply.removeAttribute('disabled');
}
else{
    apply.setAttribute('disabled',true);
}
document.addEventListener("DOMContentLoaded", function() {
    var totalPrice = document.getElementById("total-price");
    var buyButton = document.getElementById("apply");

    // Example: Initialize total price
    var totalPrice = 0;

    // Function to update the button status
    function updateButtonStatus() {
        if (totalPrice > 200) {
            buyButton.removeAttribute("disabled");
        } else {
            buyButton.setAttribute("disabled", "disabled");
        }
    }})
    const totalPrice=document.getElementById('total-price');
const totalPriceValue =parseFloat(totalPrice.innerText);
const btnApply=document.getElementById('apply');
if(totalPriceValue>=200){
    btnApply.removeAttribute('disabled');
}
else{
    btnApply.setAttribute('disabled',true);
}