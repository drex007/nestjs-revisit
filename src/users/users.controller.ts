import { Body, Controller, Get, Param, Patch, Post, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){

    }
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number){
        return this.userService.findOne(id)
    }

    @Post()
    create(@Body(ValidationPipe) createUserDto:CreateUserDto){
        return this.userService.create(createUserDto)
    }

    @Patch(':id')
    update(@Param('id') id:string,  @Body(ValidationPipe) updateUserDto:UpdateUserDto){
        return {id, ...updateUserDto}
    }
    

}
