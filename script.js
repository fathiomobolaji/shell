const addfund = document.querySelector(".addMoney");
const spend = document.querySelector(".spendFund");
var amount = Number(document.querySelector(".amountVal").textContent);
var amountVal = document.querySelector(".amountVal");
const formDet = document.querySelector(".spendForm form");
const formDet2 = document.querySelector(".spendForm2 form");
const subButton = document.querySelector(".submit");
const subButton2 = document.querySelector(".submit2");
const formAmount = document.querySelector(".price");
const formAmount2 = document.querySelector(".price2");
const formDetails = document.querySelector(".details");
const formDetails2 = document.querySelector(".details2");
const recentTrans = document.querySelector(".recTrans");
var para = document.querySelector(".noRec");
// var amountVal = Number(document.querySelector(".amountVal").textContent);
var total;
// var amountVal;
var totalAmountVal;
addfund.addEventListener("click", addMoney);
spend.addEventListener("click", spendMoney);

function addMoney(e) {
  formDet2.style.display = "none";
  formDet.style.display = "flex";
  addFunds();
}
function spendMoney(e) {
  formDet.style.display = "none";
  formDet2.style.display = "flex";
  withdrawFunds();
  console.log("money added");
}

function addFunds() {
  subButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (formAmount.value != "" && formDetails.value != "") {
      total = Number(formAmount.value);
      amount += total;
      console.log(amount);
      amountVal.textContent = amount.toLocaleString();
      var list = document.createElement("div");
      list.classList.add("addFund");
      list.innerHTML = `
      <p>${formDetails.value}</p>
      <p class="addAmount">+$ ${Number(formAmount.value).toLocaleString()}</p>
        `;
      recentTrans.prepend(list);
      para.style.display = "none";
      console.log(formAmount.value, "fromhere");
      formDet.style.display = "none";
      formAmount.value = "";
      formDetails.value = "";
    } else {
      console.log("onr is empty");
    }
  });
}
function withdrawFunds() {
  subButton2.addEventListener("click", (e) => {
    e.preventDefault();
    if (formAmount2.value != "" && formDetails2.value != "") {
      if (Number(formAmount2.value) <= amount) {
        amount -= Number(formAmount2.value);
        amountVal.textContent = amount.toLocaleString();
        formDet2.style.display = "none";
        var list = document.createElement("div");
        list.classList.add("spenddFund");
        list.innerHTML = `
       <p>${formDetails2.value}</p>
       <p class="spendAmount">-$ ${Number(
         formAmount2.value
       ).toLocaleString()}</p>
        `;
        recentTrans.prepend(list);
        formAmount2.value = "";
        formDetails2.value = "";
        console.log(amount, "from spend");
        console.log("congrats", formAmount2.value);
      } else {
        console.log("don't congrat");
      }
    } else {
      console.log("no input");
    }
  });
}
