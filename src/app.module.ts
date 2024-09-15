import { Module } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnvModule } from '@app/env/env.module';
import { DatabaseModule } from '@app/database/database.module';
import { TagsModule } from '@app/domain/tags/tags.module';
import { UsersModule } from '@app/domain/users/users.module';
import { ArticlesModule } from './domain/articles/articles.module';
import { ProfilesModule } from './domain/profiles/profiles.module';

@Module({
  imports: [TagsModule, EnvModule, DatabaseModule, UsersModule, ArticlesModule, ProfilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
