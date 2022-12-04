let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let exchangeElement = document.querySelector(".js-exchange");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let exchange = exchangeElement.value;
    let eurExchangeRate = 4.69;
    let usdExchangeRate = 4.45;
    let gbpExchangeRate = 5.46;

    let result;
    let currency;

    switch (exchange) {
        case "fromPlnToEur":
            result = amount / eurExchangeRate;
            currency = "EUR";
            break;

        case "fromPlnToUsd":
            result = amount / usdExchangeRate;
            currency = "USD";
            break;

        case "fromPlnToGbp":
            result = amount / gbpExchangeRate;
            currency = "GBP";
            break;

        case "fromEurToPln":
            result = amount * eurExchangeRate;
            currency = "PLN";
            break;

        case "fromUsdToPln":
            result = amount * usdExchangeRate;
            currency = "PLN";
            break;

        case "fromGbpToPln":
            result = amount * gbpExchangeRate;
            currency = "PLN";
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});