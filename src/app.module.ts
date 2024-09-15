import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from '@app/app.controller';
import { AppService } from '@app/app.service';
import { EnvModule } from '@app/env/env.module';
import { DatabaseModule } from '@app/database/database.module';
import { TagsModule } from '@app/domain/tags/tags.module';
import { UsersModule } from '@app/domain/users/users.module';
import { ArticlesModule } from './domain/articles/articles.module';
import { ProfilesModule } from './domain/profiles/profiles.module';
import { AuthMiddleware } from './domain/users/middlewares/auth.middleware';

@Module({
  imports: [
    TagsModule,
    EnvModule,
    DatabaseModule,
    UsersModule,
    ArticlesModule,
    ProfilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
