import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class AppController {
  constructor(private readonly appService: ProductService) {

  }

  @Get()
  getHello(): string {
    return this.appService.();
  }
  
}