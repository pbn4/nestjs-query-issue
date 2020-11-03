import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export class QueryParams {
  @ApiProperty()
  a: string
  @ApiProperty()
  b: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(@Query() queryParams: QueryParams): string {
    return this.appService.getHello();
  }

  @Get('hello2')
  @ApiQuery({type: QueryParams, name: ''})
  getHello2(@Query() queryParams): string {
    return this.appService.getHello();
  }
}
