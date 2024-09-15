import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagsModule } from '@app/tags/tags.module';
import { EnvModule } from './env/env.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [TagsModule, EnvModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
