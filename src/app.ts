import DiscordJS, { Intents } from 'discord.js'

export const bot = new DiscordJS.Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
	],
})

bot.on('ready', () =>{
	console.log('👾 BOT')
    
})

bot.on('messageCreate', (message) => {
	if(message.author == bot.user) return
	console.log(message.content)
    
})


