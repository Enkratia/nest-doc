import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Get(':id')
  getOne(@Param('id') id: number, @Body() body: Record<string, string>) {
    return `return ${body} number`;
  }
}
