function getElement(clickId){
    return document.getElementById(clickId);
}
function onClick (clickId, costId, price){
    const clickedId = getElement(clickId).addEventListener("click", function(event){
        this.style.backgroundColor = "cornflowerblue";
        totalCalculation(costId, price);
    });
}

function totalCalculation(costId, price){
    const itemCost = getElement(costId);
    itemCost.innerText = price;
    
    const bestPrice = getElement("best-price").innerText;
    const memoryPrice = getElement("memory-cost").innerText;
    const storagePrice = getElement("storage-cost").innerText;
    const deliveryCharge = getElement("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryCharge);
    

    const total = getElement("total-price");
    total.innerText = totalPrice;
}

onClick("eightGB", "memory-cost", 0);
onClick("sixteenGB", "memory-cost", 300);
onClick("ssd1", "storage-cost", 0);
onClick("ssd2", "storage-cost", 200);
onClick("ssd3", "storage-cost", 500);
onClick("free-delivery", "delivery-cost", 0);
onClick("paid-delivery", "delivery-cost", 20);

const fakeCode = "pHero";
getElement("apply-btn").addEventListener("click", function(event){
    const code = getElement("promo-input");
    const codeValue = code.value;
    if(fakeCode === codeValue){
        const total = getElement("total-price");
        let totalPrice = parseFloat(total.innerText);

        const discount = totalPrice * 20 / 100;
        totalPrice -= discount;
        total.innerText = totalPrice;

        getElement("applied-text").style.display = "block";
        getElement("not-applied-text").style.display = "none";
    }
    else{
        getElement("not-applied-text").style.display = "block";
        getElement("applied-text").style.display = "none";
    }
    code.value = "";
});