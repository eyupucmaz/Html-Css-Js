function calc() {
    let billAmount = document.querySelector("#bill-amount");
    let tipPer = document.querySelector("#tip-per");
    let tipAmount = document.querySelector("#tip-amount");
    let totalAmount = document.querySelector("#total-amount");

    billAmount = Number(billAmount.value);
    tipPer = Number(tipPer.value);

    if (billAmount >= 0 && tipPer >= 0) {
        let tip = billAmount * (tipPer * 0.01);
        let total = billAmount + tip;

        tipAmount.value = tip;
        totalAmount.value = total;
    } else {
        console.log("just positive");
    }
}
