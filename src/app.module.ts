import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnvModule } from '@app/env/env.module';
import { DatabaseModule } from '@app/database/database.module';
import { TagsModule } from '@app/domain/tags/tags.module';

@Module({
  imports: [TagsModule, EnvModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
