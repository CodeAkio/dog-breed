import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreedsController } from './modules/breeds/breeds.controller';
import { BreedsModule } from './modules/breeds/breeds.module';
import { BreedsService } from './modules/breeds/breeds.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/dogbreed.db',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: false,
    }),
    BreedsModule,
  ],
  controllers: [AppController, BreedsController],
  providers: [AppService, BreedsService],
})
export class AppModule {}
