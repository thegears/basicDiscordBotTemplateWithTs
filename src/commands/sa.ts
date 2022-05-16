import { Message } from 'discord.js/typings/index';

module.exports = {
    name: "sa",
    async run({ message }: { message: Message }) {
        return await message.reply("as");
    }
};