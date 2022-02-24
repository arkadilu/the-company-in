const express = require("express");
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;

const app = express();


app.get("/domain/:name", (req, res) => {
  const { params } = req;
  console.log('in get domain info for', params.name)
  fetch(`https://company.clearbit.com/v2/companies/find?domain=${params.name}`,
    {
      headers: {
        'Authorization': 'Bearer sk_bd16fff876554c3a767f98cf263121b4'
      }
    })
    .then((res) => res.json())
    .then((data) => res.json({ data }));

});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});