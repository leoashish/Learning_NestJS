import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const typeOrmConfig:TypeOrmModuleOptions = {
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "postgres",
   password: "singoo123#",
   database: "catsdb",
   entities: [__dirname + '/../**/*.entity.{js,ts}'],
   synchronize: true,

}