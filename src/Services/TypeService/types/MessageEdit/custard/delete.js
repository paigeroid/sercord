const MessageEdit = require('../index.js');


MessageEdit.newF("delete", function(after=0) {
    const client = this.parent.parent;
    const app = new client.AppService;
    let msg = this.raw;

    setTimeout( () => {
        msg.delete().catch(e=>{});
    }, app.parse(after)*1000 );

    return this;
});
