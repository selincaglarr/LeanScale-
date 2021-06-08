const express = require("express");
const app = express();

const Magento2Client = require("magento2-rest-client").Magento2Client;

const options = {
  url: "http://https://m2.leanscale.com/",
  consumerKey: "utvqdmpw03uzwp6k5kyzdbiozm20d2s7",
  consumerSecret: "g4iscqutq1iuj59nbcler2q4zkep9f68",
  accessToken: "bib99ay5ulymg6jgu1ur095y6cf26tn4",
  accessTokenSecret: "sl3lu6bvsnxinxf4fx77gb7bgja052t1",
};

const client = Magento2Client(options);
client.categories.list().then(function (categories) {
  assert.equal(categories.parentId, 1);
});

// app.listen(3000, function (req, res) {
//   console.log("Server is running at port 3000");
// });
