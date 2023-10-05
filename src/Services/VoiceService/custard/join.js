const VoiceService = require('../index.js');
const voice = require('@discordjs/voice');


VoiceService.newF("join", async function(channel) {
    voice.joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator
    });
})
