const csvjson = require('csvjson');
const { writeToLocalCache, readLoadCache, lastModifiedDate } = require('../fs');
const axios = require('axios');

const getNums = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  const endpoint = process.env.ENDPOINT;
  axios({
    method: 'GET',
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/csv',
    },
  })
    .then(async (response) => {
      const options = {
        delimiter: ',',
        quote: '"',
      };
      let dataJson = csvjson.toSchemaObject(response.data, options);

      let dataJsonForVIC = dataJson.filter((item) => item.state == 'Victoria');
      let dataJsonForWA = dataJson.filter(
        (item) => item.state == 'Western Australia'
      );

      const mapDayToMonthVIC = dataJsonForVIC.map((x) => ({
        ...x,
        date: new Date(x.date).getMonth(),
        recovered: Number(x.recovered),
      }));

      const mapDayToMonthWA = dataJsonForWA.map((x) => ({
        ...x,
        date: new Date(x.date).getMonth(),
        recovered: Number(x.recovered),
      }));

      const sumPerMonthVIC = mapDayToMonthVIC.reduce((acc, cur) => {
        acc[cur.date] = acc[cur.date] + cur.recovered || cur.recovered;
        return acc;
      }, {});
      const sumPerMonthWA = mapDayToMonthWA.reduce((acc, cur) => {
        acc[cur.date] = acc[cur.date] + cur.recovered || cur.recovered;
        return acc;
      }, {});

      writeToLocalCache(
        { VIC: sumPerMonthVIC, WA: sumPerMonthWA },
        'local.json'
      );

      res.status(200).json({ VIC: sumPerMonthVIC, WA: sumPerMonthWA });
    })
    .catch((error) => {
      //slack.alert(JSON.stringify(error));
      next(error);
      var callback = (jsonData) => {
        res.send(JSON.parse(jsonData));
      };
      readLoadCache('local.json', callback);
    });
};

module.exports = { getNums };
