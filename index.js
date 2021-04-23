const { Theme, Event, sequelize } = require('./models');

(async () => {
    const t1 = await Theme.create({name: 't1'});
    const e1 = await t1.createEvent({name: 'e1'});
    const e2 = await t1.createEvent({name: 'e2'});
    (await t1.getEvents()).forEach(
        e => console.log(e.name)
    );
    (await e1.getThemes()).forEach(
        t => console.log(t.name)
    );
    await sequelize.close();
})();
