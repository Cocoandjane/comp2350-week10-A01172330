const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku ="mysql://i40wodotvago9jjp:fwde7xuqb907y8k2@acw2033ndw0at1t7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/su8ad2o8zsnbmrtn"

const dbConfigLocal = "mysql://root:Feiyang999@localhost/web_user";

if (is_heroku) {
    var databaseConnectionString = dbConfigHeroku;
} else {
    var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;