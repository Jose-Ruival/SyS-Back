import { Module } from '@nestjs/common';
//import { document.controller.ts } from './document.controller';
import { documentService } from './document.service';

@Module({
  controllers: [],
  providers: [documentService],
  exports: [],
})
export class documentModule {}
