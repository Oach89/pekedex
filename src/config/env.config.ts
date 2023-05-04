export const EnvConfiguration = () => ({
    enviroment: process.env.NODE_ENV || 'dev',
    mongodb: process.env.DATABASE_MONGO,
    port: process.env.APP_PORT || 3001,
    defaultLimit: +process.env.DEFAULT_LIMIT || 7
})