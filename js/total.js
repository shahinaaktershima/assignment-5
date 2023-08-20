
function addDisabled() {
    const total=document.getElementById('total-price').innerText;
const totalAmount=parseFloat(total);
const btnApply=document.getElementById('apply');
if(totalAmount>=200){
    btnApply.removeAttribute('disabled');
}
else{
    btnApply.setAttribute('disabled',true);
}
const purchase=document.getElementById('purchase');
if(totalAmount>0){
    purchase.removeAttribute('disabled');
}
else{
    purchase.setAttribute('disabled',true);
}
}