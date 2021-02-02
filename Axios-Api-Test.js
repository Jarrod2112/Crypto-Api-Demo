const axios = require("axios").default;

const getData = () => {
    axios
        .get("https://api.blockchain.com/v3/exchange/tickers/LTC-USD")
        .then(function (response) {
            return response.data;
        })
        .then(function (response) {
            console.log(response);
        })
        .then(function (tickers) {

        })
        .catch(function (error) {
            console.log(error);
        });
};


//getData();
//getData2();

let test = "test";
console.log("https://api.blockchain.com/v3/exchange/tickers/" + test);


//Create field that excepts a symbol (BTC-USD)
//Create button the submits GET request for price pertaining to symbol entered.