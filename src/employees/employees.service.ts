import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from 'src/database/database.service';
import { Prisma, Role } from 'generated/prisma/client';

@Injectable()
export class EmployeesService {
  constructor(private readonly dbService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    return this.dbService.employee.create({
      data: createEmployeeDto,
    });
  }

  findAll(role?: Role) {
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

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
