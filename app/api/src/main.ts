import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    credentials: true,
    origin: ['http://vps-ion.tech', 'http://vps-ion.tech/predictix'],
    methods: 'POST,PUT,DELETE,GET,PATCH',
    allowedHeaders:
      'Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Expose-Headers, Content-Type,Authorization',
  });

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  await app.listen(3001);
}
bootstrap();
