/* eslint-disable no-console */
// const request = require('superagent');

const fetch = require('node-fetch');

// require('dotenv').config();

exports.handler = async (event) => {
  try {
    // grab the pokemon's name from the request's query parameters
    // here is an example from the netlify docs:
    // https://functions.netlify.com/playground/#hello%2C-%7Bname%7D 
    
    // consult the pokedex docs 
    // https://pokedex-alchemy.herokuapp.com/
    const name = await fetch(`/.netlify/functions/pokemon?search=${event.queryStringParameters.pokemon}`);
    

    return { 
      statusCode: 200, 
    // this is where you shoot data back to the user. right now it's sending an empty object--replace this with the pokemon data. remember, you do need to stringify it, otherwise netlify gets mad. ¯\_(ツ)_/¯
      body: JSON.stringify({ name }),
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' }),
    };
  }
};
    