class AppConfig {
  // Database:
  public host = process.env.MYSQLHOST || "localhost"; // Computer name/address of our database
  public user = process.env.MYSQLUSER || "root"; // Database user
  public password = process.env.MYSQLPASSWORD || ""; // Database password
  public database = process.env.MYSQLDATABASE || "codeblocksProject"; // Database name
  public dbPort = Number(process.env.MYSQLPORT) || 3306;
  // Server port:
  public port = process.env.PORT || 3001;
}

const appConfig = new AppConfig();

export default appConfig;
