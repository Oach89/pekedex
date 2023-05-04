// DATABASE_HOST= localhost
// DATABASE_PORT= 
// DATABASE_USER=
// DATABASE_NAME= 
// DATABASE_MONGO = mongodb://localhost:27017/nest-pokemon
// APP_PORT= 3001
// APP_VERSION= 
export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.DATABASE_MONGO,
    port: process.env.APP_PORT || 3001,
    defaultLimit: process.env.DEFAULT_LIMIT || 7
})