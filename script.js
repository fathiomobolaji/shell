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
const msgImg = document.querySelector(".msgImg");
const msgText = document.querySelector(".msgText");
const closePop = document.querySelector(".close");
const msgWrapper = document.querySelector(".msg-wrapper");

var total;
var totalAmountVal;
addfund.addEventListener("click", addMoney);
spend.addEventListener("click", spendMoney);
closePop.addEventListener("click", closePopUP);
function addMoney(e) {
  formDet2.style.display = "none";
  formDet.style.display = "flex";
  addFunds();
}
function spendMoney(e) {
  formDet.style.display = "none";
  formDet2.style.display = "flex";
  withdrawFunds();
}

function addFunds() {
  formDet.addEventListener("submit", (e) => {
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

      // msgWrapper.classList.add("noShow");
      // msgWrapper.classList.remove("msg-wrapper");
      // msgText.textContent = "saved";
      // console.log(msgWrapper.classList);
      recentTrans.prepend(list);
      para.style.display = "none";
      formDet.style.display = "none";
      // formAmount.value = "";
      // formDetails.value = "";
    } else if (formAmount.value == "" || formDetails.value == "") {
      msgWrapper.style.display = "block";
      msgText.textContent = "Ensure you input all fields";
      msgImg.src = "./imgs/grade (3).png";
      formAmount2.value = "";
      formDetails2.value = "";
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
        // formAmount2.value = "";
        // formDetails2.value = "";
        console.log(amount, "from spend");
        console.log("congrats", formAmount2.value);
      } else {
        msgWrapper.style.display = "block";
        msgText.textContent =
          "Insufficient Balance:You no fit spend pass your income";
        msgImg.src = "./imgs/grade (1).png";
        formAmount2.value = "";
        formDetails2.value = "";
        formDet2.style.display = "none";
      }
    } else if (formAmount2.value == "" || formDetails2.value == "") {
      msgWrapper.style.display = "block";
      msgText.textContent = "Ensure you input all fields";
      msgImg.src = "./imgs/grade (3).png";
      formAmount2.value = "";
      formDetails2.value = "";
    }
  });
}
function closePopUP() {
  msgWrapper.style.display = "none";
}
msgWrapper.addEventListener("click", () => {
  msgWrapper.style.display = "none";
});
