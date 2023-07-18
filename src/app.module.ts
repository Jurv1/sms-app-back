import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CqrsModule } from '@nestjs/cqrs';
import { PresetsController } from './api/presets/presets.controller';
import { PresetsModule } from './api/presets/presets.module';

const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.RENDER_HOST,
  port: 5432,
  username: process.env.RENDER_USER,
  password: process.env.RENDER_PASS,
  database: process.env.RENDER_NAME,
  autoLoadEntities: true,
  synchronize: true,
  ssl: true,
};

@Module({
  imports: [CqrsModule, PresetsModule, TypeOrmModule.forRoot(options)],
  controllers: [AppController, PresetsController],
  providers: [AppService],
})
export class AppModule {}
