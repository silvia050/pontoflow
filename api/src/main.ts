import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Permite que o frontend (Next.js) acesse a API pelo navegador
  app.enableCors({
    origin: process.env.WEB_URL ?? 'http://localhost:3000',
    credentials: true,
  });

  // API roda na porta 3333 para não conflitar com o Next.js (porta 3000)
  const port = Number(process.env.PORT ?? 3333);
  await app.listen(port);

  console.log(`🚀 API Nexora rodando em http://localhost:${port}`);
}

await bootstrap();