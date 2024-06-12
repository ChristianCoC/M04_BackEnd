/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    };

    @Get(":id")
    getUserById(@Param("id") id: string) {
        return this.usersService.getUserById(Number(id));
    };

    @HttpCode(201)
    @Post()
    createUser() {
        return "Este endpoint es para crear usuarios";
    };

    @Put()
    updateUser() {
        return "Este endpoint es para actualizar usuarios";
    };

    @Put(":id")
    updateUserById() {
        return "Este endpoint es para actualizar un usuario por id";
    };

    @Delete()
    deleteUser() {
        return "Este endpoint es para eliminar usuarios";
    };

    @Delete(":id")
    deleteUserById() {
        return "Este endpoint es para eliminar un usuario por id";
    };
}