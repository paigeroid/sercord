const Guild = require('../index.js');


Guild.newF("apply", async function(ctx) {
    const client = this.parent.parent;
    client.import("messages", "channels", "users", "util", "roles", "logs", "types");

    
    // info
    this.id = ctx.id;
    this.url = `discord.gg/${ctx.vanityURLCode}`
    this.name = ctx.name;
    this.description = ctx.description;
    this.owner;
    this.ownerId = ctx.ownerId;
    this.verified = ctx.verified;
    this.verificationLevel = ctx.verificationLevel;
    this.applicationId = ctx.applicationId;
    this.locale = ctx.preferredLocale;
    this.acronym = ctx.nameAcronym;
    this.urlCode = ctx.vanityURLCode
    this.urlUses = ctx.vanityURLUses
    // this.banner
    // this.icon


    // bools
    this.available = ctx.available;
    this.partnered = ctx.partnered;
    this.large = ctx.large;

    
    // lists
    this.features = ctx.features;
    
    this.members;
    this.users;
    this.bots;
    
    this.channels;
    this.textChannels;
    this.voiceChannels;
    this.threadChannels;
    this.categories;
    this.allChannels;

    
    // counts
    this.memberCount;
    this.botCount;
    this.userCount;
    this.channelCount;
    this.categoryCount;
    this.textChannelCount;
    this.voiceChannelCount;
    this.threadCount;


    // more lists
    this.emojis = ctx.emojis;
    this.stickers = ctx.stickers;
    this.commands = ctx.commands;
    this.invites = ctx.invites;
    this.presences = ctx.presences;
    this.events = ctx.scheduledEvents;
    this.stages = ctx.stageInstances;

    
    // channel stuff
    this.afkChannel = await channels.get(ctx.afkChannelId);
    this.afkChannelId = ctx.afkChannelId;
    this.afkTimeout = ctx.afkTimeout;
    
    this.updatesChannel = await channels.get(ctx.publicUpdatesChannelId);
    this.updatesChannelId = ctx.publicUpdatesChannelId;
    
    this.rulesChannel = await channels.get(ctx.rulesChannelId);
    this.rulesChannelId = ctx.rulesChannelId;

    this.alertsChannel = await channels.get(ctx.safetyAlertsChannelId);
    this.alertsChannelId = ctx.safetyAlertsChannelId;

    this.systemChannel = await channels.get(ctx.systemChannelId);
    this.systemChannelFlags = ctx.systemChannelFlags;
    this.systemChannelId = ctx.systemChannelId;

    this.widgetChannel = await channels.get(ctx.widgetChannelId);
    this.widgetChannelId = ctx.widgetChannelId;
    this.widgetEnabled = ctx.widgetEnabled;


    // approx
    this.approxMemberCount = ctx.approximateMemberCount;
    this.approxPresenceCount = ctx.approximatePresenceCount;

    
    // moderation
    this.rules = ctx.autoModerationRules
    this.filter = ctx.explicitContentFilter;
    this.nsfwLevel = ctx.nsfwLevel;
    this.mfaLevel = ctx.mfaLevel;
    this.bans = ctx.bans;
    this.logs = logs;


    // timestamps
    this.timestamps = {
        created: new Timestamp(ctx.createdAt),
        joined: new Timestamp(ctx.joinedAt)
    };

    this.createdAt = ctx.createdAt;
    this.joinedAt = ctx.joinedAt;

    // max
    this.max = {
        bitrate: ctx.maximumBitrate,
        members: ctx.maximumMembers,
        presences: ctx.maximumPresences,
        stageVideos: ctx.maxStageVideoChannelUsers,
        videos: ctx.maxVideoChannelUsers
    }


    // splashes
    this.discoverySplash = ctx.discoverySplash;
    this.splash = ctx.splash;


    // shard
    this.shard = ctx.shard;
    this.shardId = ctx.shardId;


    // voice stuff
    this.voiceAdapterCreator = ctx.voiceAdapterCreator;
    this.voiceStates = ctx.voiceStates;


    this.raw = ctx;


    // users fix
    this.owner = await users.get(ctx.ownerId, this);

    let ugroup = new types.UserGroup();
    await ugroup.init(this);

    this.members = ugroup;
    /*
    this.users = ugroup.weed( u => true );
    this.bots = ugroup.weed( u => u.bot );

    
    this.channels = cgroup.weed( c => c.type != 4 );
    this.textChannels = cgroup.weed( c => c.type == 0 );
    this.voiceChannels = cgroup.weed( c => c.type == 2 );
    this.threadChannels = cgroup.weed( c => c.type == 11 );
    this.categories = cgroup.weed( c => c.type == 4 );
    this.allChannels = cgroup.weed( c => c.type == 11 );
    */
});
