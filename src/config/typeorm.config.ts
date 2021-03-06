import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'ps2',
    entities: [__dirname + '/../**/*.entity.{js, ts}'], // caso não coloque {js, ts} não funciona!!!
    synchronize: true,
    logging: true,
    logger: 'file',
};