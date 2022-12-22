/*
    1. unit을 누르면 unit이 선택된다.
    2. 아래도 마찬가지
    3. '금액을 입력하세요'라는 기본 텍스트가 있다.
    4. 금액을 입력하면 표시된다.
    5. 바로 아래 단위가 바뀐다.
    6. 환전 금액이 반대편에 표시된다.
    7. (항상 반대편의 단위는 교환된다)

    2. 환율정보 들고오기
    3. 드롭다운 리스트에서 아이템 선택하면 아이템이 바뀜
    ---
    4. 금액을 입력하면 환전이 된다
    5. 드롭다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
    6. 숫자를 한국어로 읽는 법
    7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다!
*/

const currencyRatio = {

    USD : {
        KRW: 1310.38,
        USD: 1,
        VND: 23525.00,
        unit: "달러"
    },

    KRW : {
        KRW: 1,
        USD: 0.00076,
        VDN: 17.95,
        unit: "원"
    },

    VND: {
        KRW: 0.056,
        USD: 0.000043,
        VND: 1,
        unit: "동"
    }
}
let fromCurrency = 'USD';
let toCurrency = 'USD';

const fromResult = document.querySelector("#from-result");
const toResult = document.querySelector("#to-result");
const fromInput = document.querySelector("#from-input");
const toInput = document.querySelector("#to-input");

document.querySelectorAll("#from-currency-list a")
.forEach(menu=>menu.addEventListener("click", function(){
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    exchange();
}));

document.querySelectorAll("#to-currency-list a")
.forEach(menu=>menu.addEventListener("click", function(){
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    fromInput.value = inComing * currencyRatio[toCurrency][fromCurrency];
}));

// FROM --> TO
fromInput.addEventListener('input', function(){
    exchange();
});

// TO --> FROM
toInput.addEventListener('input', function(){
   let inComing = toInput.value;
   fromInput.value = inComing * currencyRatio[toCurrency][fromCurrency];
});

function exchange() {
    let inComing = parseInt(fromInput.value);
    console.log(typeof inComing);
    if(inComing !== 'NaN' && inComing !== 0) {
        console.log(inComing);
        console.log('hi');
        toInput.value = inComing * currencyRatio[fromCurrency][toCurrency];
    }
}






