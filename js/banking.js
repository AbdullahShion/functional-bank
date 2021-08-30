
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
// clear input fleid
    inputField.value = '';
    return amountValue;
}
// Deposit and withdraw section
function updateTotalField(totalFieldId, depositAmount) {
   
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText; 
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + depositAmount;

}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
// balance field

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance;
    
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}
    
// Deposit section
document.getElementById('deposit-button').addEventListener('click', function () {
    
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
    updateTotalField('deposit-total' , depositAmount);
    updateBalance(depositAmount,true);
    }
   

})

// withdrew section
document.getElementById('withdraw-button').addEventListener('click',function()
    {
    const previousWithdrawTotal = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance;
    if (previousWithdrawTotal > 0 && previousWithdrawTotal < currentBalance) {

    updateTotalField('withdraw-total', previousWithdrawTotal);
    updateBalance(previousWithdrawTotal , false);

    }
    if (previousWithdrawTotal > currentBalance) {
        console.log('please add tk')
    }

    })
