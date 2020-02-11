import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as gc from 'gc-stats';

function bytesToSize(bytes) {
  var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
  return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i];
}

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  gc().on('stats', function (stats) {
    console.log('GC happened',new Date().toTimeString(), '||', stats.after.usedHeapSize,bytesToSize(stats.after.usedHeapSize));
  });
}
bootstrap();
