import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ParachutesModule } from './parachutes/parachutes.module';

@Module({
  imports: [ParachutesModule, MongooseModule.forRoot('mongodb+srv://Zachlesk:1097183082@astronauts.nc2rbwl.mongodb.net/rockets')],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
