import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './create-user.dto';
import { updateUserDto } from './update-user.dto';
import { ValidationPipe } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Get() // get users
  // findAll(): string[] {
  //     return [];
  // }

  // get with query params
  // get users or /users?role= value

  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.usersService.findAll(role);
  }

  @Get(':id') // get user by id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() // create user
  create(@Body(ValidationPipe) createUserDto: createUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch(':id') // PATCH /users/:id
  update(
    @Param('id') id: string,
    @Body(ValidationPipe)
    updateUserDto: updateUserDto,
  ) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id') // DELETE /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
