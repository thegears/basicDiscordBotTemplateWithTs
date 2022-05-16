import { Client } from 'discord.js';
const config = require("../config.json");

const client = new Client({
    intents: 32767
});
client.login(config.token);

export default client;