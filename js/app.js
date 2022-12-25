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

/* 선택자 */
const toBtn = document.querySelector('.to-btn');
const fromBtn = document.querySelector('.from-btn');
const fromList = document.querySelectorAll('.from-list a');
const toList = document.querySelectorAll('.to-list a');
const fromInput = document.querySelector('.from-input');
const toInput = document.querySelector('.to-input');
const fromResult = document.querySelector('.from-result');
const toResult = document.querySelector('.to-result');

/* 환율 단위 */
let fromCurrency = 'USD';
let toCurrency = 'KRW';

/* 초기 설정 */
init();

/* 인풋 이벤트 */
fromInput.addEventListener('input', () => {
    fromSync();
    toInput.value = (fromInput.value * currencyRatio[fromCurrency][toCurrency]).toFixed(2);
    toResult.textContent = (fromInput.value * currencyRatio[fromCurrency][toCurrency]).toFixed(2) + currencyRatio[toCurrency]['unit'];
    toSync();
})

toInput.addEventListener('input', () => {
    toResult.textContent = toInput.value + currencyRatio[toCurrency]['unit'];
    fromInput.value = (toInput.value * currencyRatio[toCurrency][fromCurrency]).toFixed(2);
    fromResult.textContent = (toInput.value * currencyRatio[toCurrency][fromCurrency]).toFixed(2) + currencyRatio[fromCurrency]['unit'];
})

/* 드롭다운 리스트 선택 */
fromList.forEach(list => {
    list.addEventListener('click', () => {
        fromBtn.textContent = list.textContent;
        fromCurrency = list.textContent;
        fromSync();
        toSync();
    })
})

toList.forEach(list => {
    list.addEventListener('click', () => {
        toBtn.textContent = list.textContent;
        toCurrency = list.textContent;
        toSync();
    })
})

function init() {
    fromInput.value = currencyRatio['USD']['USD'];
    toInput.value = currencyRatio['USD']['USD'] * currencyRatio['USD']['KRW'];
    fromResult.textContent = currencyRatio['USD']['USD'] + currencyRatio['USD']['unit'];
    toResult.textContent = currencyRatio['USD']['USD'] * currencyRatio['USD']['KRW'] + currencyRatio['KRW']['unit'];
}

function fromSync() {
    fromResult.textContent = fromInput.value + currencyRatio[fromCurrency]['unit'];
}

function toSync() {
    toInput.value = (fromInput.value * currencyRatio[fromCurrency][toCurrency]).toFixed(2);
    toResult.textContent = (fromInput.value * currencyRatio[fromCurrency][toCurrency]).toFixed(2) + currencyRatio[toCurrency]['unit'];
}