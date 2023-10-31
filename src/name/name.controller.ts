import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Request,
  All,
} from '@nestjs/common';

import { NameService } from './name.service';
import { CreateNameDto } from './dto/create-name.dto';
import { UpdateNameDto } from './dto/update-name.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '../auth/enums/role.enum';

@Controller('name')
export class NameController {
  constructor(private readonly nameService: NameService) {}

  @Post()
  @Roles(Role.Admin)
  create(@Body() createNameDto: CreateNameDto) {
    return this.nameService.create(createNameDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.nameService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.nameService.findOne(+id);
  }

  @All()
  getAll() {
    return 'all';
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNameDto: UpdateNameDto) {
    return this.nameService.update(+id, updateNameDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nameService.remove(+id);
  }
}
