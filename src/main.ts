import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { myExceptionFactory } from './exception/exception.factory';
import { HttpExceptionFilter } from './exception/exception.filter';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      exceptionFactory: myExceptionFactory,
    }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());
  useContainer(app.select(AppModule), {
    fallbackOnErrors: true,
  });
  await app.init();
  await app.listen(3003);
}

bootstrap();
