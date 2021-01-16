module.exports = (client) => {
    const channelId = '' // welcome channel
    const targetChannelId = '' // rules and info channel
  
    client.on('guildMemberAdd', (member) => {
      console.log(member)

      const message = `Welcome message here <@${
        member.id
      }> Please read ${member.guild.channels.cache
        .get(targetChannelId)
        .toString()}`
  
      const channel = member.guild.channels.cache.get(channelId)
      channel.send(message)
    })
  }
  
