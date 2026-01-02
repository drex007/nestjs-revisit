import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {

    private users = [
        {
            "id":1,
            "name":"James Aremu",
            "role": "INTERN"
        },
        {
            "id":2,
            "name":"Phyna Aremu",
            "role": "ADMIN"
        }
    ]


    findAll(role?: ''){
        if(role){  
            return this.users.filter(user => user.role == role)
        }
        return this.users
    }


    findOne(id:number){
        const user = this.users.find(user => user.id === id)
        if(!user) throw new NotFoundException('User Not FOund')
        return user
    }

    create(user:CreateUserDto){
        const highestId = [...this.users].sort((a, b) => b.id - a.id)
        const newUser = {
            id:highestId[0].id + 1,
            ...user
        }

        this.users.push(newUser)
        return newUser


    }


    update(id:number, updatedUser:{name:string, role:'INTERN' | 'ADMIN'}){
        const highestId = this.users
        const newUser = {
            id:highestId[0].id + 1,
            ...updatedUser
        }

        this.users.push(newUser)
        return newUser


    }
}
 