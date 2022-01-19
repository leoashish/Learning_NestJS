import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cat.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { CatRepository } from './cats/cats.repository';

@Module({
  imports: [ TypeOrmModule.forRoot(typeOrmConfig) , TypeOrmModule.forFeature([CatRepository])],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
