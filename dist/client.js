"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config = require("../config.json");
const client = new discord_js_1.Client({
    intents: 32767
});
client.login(config.token);
exports.default = client;
