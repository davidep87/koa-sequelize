#### Node.JS (7.7.1) - KoaJS (2.3) - Sequelize 3.3

#### Before you start the project you have to install the database dialect based on your preference:

`$ npm install --save pg pg-hstore`

`$ npm install --save mysql2`

`$ npm install --save sqlite3`

`$ npm install --save tedious // MSSQL`
###### or
`$ yarn add pg pg-hstore`

`$ yarn add mysql2`

`$ yarn add sqlite3`

`$ yarn add tedious // MSSQL`

- ###### Then configure the file database.json in the config directory
- ###### In models you can find a ready to use example of Users model

##### How to modify database structure without forcing sync of sequelize:
  - Create a migration file running this command example in the main dir of the project:
    - `$ sequelize migration:create --name "nameOfMigrationFile" --migrations-path migrations/`
  - Write logic to change db structure in the new generated file in migrations/
    - Documentation: http://docs.sequelizejs.com/en/latest/docs/migrations/
  - Run the command sequelize db:migrate to update database structure

##### NOTE: database models are attached on the koa context so you are able to use it easily around the project like:

`cont users = await ctx.db.models.User.findAll()`


###### This project is not ready for production is just a good starting point to approach sequelize and koa

## Author
[Davide Polano](https://www.mdslab.org)
