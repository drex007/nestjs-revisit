import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){

    }
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        
        return this.userService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.userService.findOne(+id)
    }

    @Post()
    create(@Body() user:{name:"Ifeany ugba", role:'INTERN'}){
        return this.userService.create(user)
    }

    @Patch(':id')
    update(@Param('id') id:string,  @Body() user:{ }){
        return {id, ...user}
    }
    

}
