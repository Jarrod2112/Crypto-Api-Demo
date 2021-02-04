const axios = require("axios").default;

const getData = () => {
    axios
        .get("https://api.blockchain.com/v3/exchange/tickers")
        .then(function (response) {
           keys = Object.keys(response.data);
                      console.log(keys);
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
};


getData();
//getData2();

//let test = "test";
//console.log("https://api.blockchain.com/v3/exchange/tickers/" + test);


//Return data and add put in option drop down menu
