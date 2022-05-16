import { Collection } from 'discord.js';
import client from './client';
import fs from 'fs';

let commands = new Collection();

fs.readdirSync(__dirname + "/commands").forEach(f => {
    let cmd = require(__dirname + "/commands/" + f);

    commands.set(cmd.name, cmd);
});

client.on("ready", () => {
    console.log("Hazır");
});

client.on("messageCreate", (message) => {
    let cmd: any = commands.get(message.content);
    if (cmd) cmd.run({ client, message });
});