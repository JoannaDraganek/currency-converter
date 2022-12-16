{
    const calculateResult = (amount, exchange) => {
        const eurExchangeRate = 4.69;
        const usdExchangeRate = 4.45;
        const gbpExchangeRate = 5.46;
        switch (exchange) {
            case "fromPlnToEur":
                currency = "EUR";
                return amount / eurExchangeRate;

            case "fromPlnToUsd":
                currency = "USD";
                return amount / usdExchangeRate;

            case "fromPlnToGbp":
                currency = "GBP";
                return amount / gbpExchangeRate;

            case "fromEurToPln":
                currency = "PLN";
                return amount * eurExchangeRate;

            case "fromUsdToPln":
                currency = "PLN";
                return amount * usdExchangeRate;

            case "fromGbpToPln":
                currency = "PLN";
                return amount * gbpExchangeRate;
        }
    }

    const onFormSubit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const exchangeElement = document.querySelector(".js-exchange");

        const amount = +amountElement.value;
        const exchange = exchangeElement.value;

        const result = calculateResult(amount, exchange);
        updateResultText(result, currency);
    };

    const updateResultText = (text) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = text;
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubit);
        updateResultText(`${result.toFixed(2)} ${currency}`);
    };
    init();
}
