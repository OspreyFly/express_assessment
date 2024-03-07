const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function gatherDevInfo(developer){
  try{
    const response = await axios.get(`https://api.github.com/users/${developer}`);
    return {name: response.data.name, bio: response.data.bio};
  }catch(error){
    console.error(`Could not find ${developer}:`, error);
    return null;
  }
}

app.post('/', async (req, res, next) => {
  const developers = req.body.developers;
  const result = await Promise.all(developers.map(dev => gatherDevInfo(dev)));
  return res.send(JSON.stringify(result));
})

app.listen(3000, () => {
  console.log("Server Starting on port 3000");
})

module.exports = app;