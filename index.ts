import dotenv from 'dotenv'
import { bot }  from './src/app'
dotenv.config()
if(!process.env.DISCORD_TOKEN)
	throw new Error('TOKEN IS NOT DEFINDED!!!')
bot.login(process.env.DISCORD_TOKEN)
