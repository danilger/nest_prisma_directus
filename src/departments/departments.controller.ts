import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { DepartmentsService } from './departments.service';
import { CreateDepartmentsDto } from 'src/generated/nestjs-dto/create-departments.dto';
import { UpdateDepartmentsDto } from 'src/generated/nestjs-dto/update-departments.dto';
import { DepartmentsDto } from 'src/generated/nestjs-dto/departments.dto';

@ApiTags('departments')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  @ApiCreatedResponse({ type: DepartmentsDto })
  create(@Body() createDepartmentDto: CreateDepartmentsDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get()
  @ApiOkResponse({ type: [DepartmentsDto] })
  findAll(): Promise<DepartmentsDto[]> {
    return this.departmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentsDto,
  ) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentsService.remove(+id);
  }
}
