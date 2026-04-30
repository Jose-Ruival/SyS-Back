import { Module } from '@nestjs/common';
import { documentModule } from './document/document.module';
@Module({
  imports: [documentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
