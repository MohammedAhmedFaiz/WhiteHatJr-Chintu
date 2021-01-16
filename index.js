const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')


const welcome = require('./welcome')

const memberCount = require('./member-count')





client.on('ready', () => {
    console.log('The client is ready!')

    
    
    command(client, 'ping', (message) => {
        message.channel.send('Pong!')
    })  // sends message "Pong!" when "!ping" is said

    
    
    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
            message.channel.send(`${guild.name} has a total of ${guild.memberCount} members`
            )
        })
    })    // tells the number of members in the server by the command "!servers"



    command(client, ['cc', 'clearchannel'], (message) => {
        if (message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.messages.fetch().then((results) => {
                message.channel.bulkDelete(results)
            })
        }
    })   // clears the all the current channel messages by the command "!clearchannel"


    client.user.setActivity('WhiteHat Jr SEO', {
        type: 'Playing'});
    


    
    welcome(client)



    
    
    memberCount(client)
})       







client.login(config.token)