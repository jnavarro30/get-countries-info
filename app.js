/*
Use the following API documentation to solve the challenge: https://restcountries.eu/

Write a function named getCountriesInfo. This function receives one parameter. The name of a country. You should request to the API the information of that country. You should console log the following information from the countries(s) received.
- Name
- Capital
- Region
- Population

*/
const axios = require('axios');

async function getCountriesInfo(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;
  const info = axios
    .get(url)
    .then(response => {
      const { name, capital, region, population } = response.data[0];
      return name;
    })

    return info;
}

getCountriesInfo('italy').then(console.log);

module.exports = getCountriesInfo;