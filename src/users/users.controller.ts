import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {

    constructor(private readonly usersService: UsersService) {};

    @Get()
    async getUsers() {
        return await this.usersService.getUsers();
    };

    @Get(":id")
    async getUserById(@Param("id") id: string) {
        return await this.usersService.getUserById(Number(id));
    };

    @HttpCode(201)
    @Post()
    async createUser(@Body() user: any) {
        return await this.usersService.createUser(user);
    };

    @Put(":id")
    async updateUserById(@Param("id") id: string, @Body() user: any) {
        const updatedUser = await this.usersService.updateUser(Number(id), user);
        return updatedUser;
    };

    @Delete(":id")
    async deleteUserById(@Param("id") id: string) {
        return await this.usersService.deleteUser(Number(id));
    };
};