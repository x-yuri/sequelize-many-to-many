## Running

```
$ docker-compose up
$ npx sequelize db:migrate
$ node index.js
```

## Creation

```
$ echo {} > package.json
$ npm install sequelize sequelize-cli pg
$ npx sequelize init
$ npx sequelize model:generate --name Event --attributes name:string
$ npx sequelize model:generate --name Theme --attributes name:string
$ npx sequelize model:generate --name ThemeEvent --attributes EventId:integer,ThemeId:integer
```
