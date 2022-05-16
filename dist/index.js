"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const client_1 = __importDefault(require("./client"));
const fs_1 = __importDefault(require("fs"));
let commands = new discord_js_1.Collection();
fs_1.default.readdirSync(__dirname + "/commands").forEach(f => {
    let cmd = require(__dirname + "/commands/" + f);
    commands.set(cmd.name, cmd);
});
client_1.default.on("ready", () => {
    console.log("Hazır");
});
client_1.default.on("messageCreate", (message) => {
    let cmd = commands.get(message.content);
    if (cmd)
        cmd.run({ client: client_1.default, message });
});
