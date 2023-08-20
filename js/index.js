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

