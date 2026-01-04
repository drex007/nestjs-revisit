import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma, Role } from '@prisma/client';


@Injectable()
export class EmployeesService {
  constructor(private readonly dbService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.dbService.employee.create({
      data: createEmployeeDto,
    });
  }

async findAll(role?: Role) {
    if (role) {
      return this.dbService.employee.findMany({
        where: {
          role,
        },
      });
    } else {
      return this.dbService.employee.findMany();
    }
  }

  async findOne(id: number) {
    const user = await this.dbService.employee.findUnique({
      where: { id },
    });
    if (user) {
      return user;
    } else {
      throw new NotFoundException('Employee Not Found');
    }
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.dbService.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  remove(id: number) {
    return this.dbService.employee.delete({ where: { id } });
  }
}
