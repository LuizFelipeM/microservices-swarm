import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { EmailIntModule } from './email-int.module';

async function bootstrap() {
  const app = await NestFactory.create(EmailIntModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
