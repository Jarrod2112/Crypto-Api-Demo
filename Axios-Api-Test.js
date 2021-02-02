const axios = require("axios").default;

const getData = () => {
  axios
    .get("https://api.blockchain.com/v3/exchange/symbols")
    .then(function (response) {
      return response.data;
    })
    .then(function (data) {
      const keys = Object.keys(data);
      console.log(keys);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const getData2 = () => {
  axios
    .get("https://api.github.com/repos/jreina/blync-party")
    .then(function (response) {
      console.log(response.data.issues_url);
    })
    .catch(function (error) {
      console.log(error);
    });
};

getData();
//getData2();
