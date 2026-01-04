import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateDepartmentsDto } from 'src/generated/nestjs-dto/update-departments.dto';
import { CreateDepartmentsDto } from 'src/generated/nestjs-dto/create-departments.dto';

@Injectable()
export class DepartmentsService {
  constructor(private prisma: PrismaService) {}

  create(createDepartmentDto: CreateDepartmentsDto) {
    return this.prisma.departments.create({ data: createDepartmentDto });
  }

  findAll() {
    return this.prisma.departments.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentsDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
