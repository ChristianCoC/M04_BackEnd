import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, UseGuards } from "@nestjs/common";
import { UsersService } from "./users.service";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("users")
export class UsersController {

    constructor(private readonly usersService: UsersService) {};

    @Get()
    @UseGuards(AuthGuard)
    async getUsers(@Query('page') page: number = 1, @Query('limit') limit: number = 5) {
        return await this.usersService.getUsers(page, limit);
    };

    @Get(":id")
    @UseGuards(AuthGuard)
    async getUserById(@Param("id") id: string) {
        return await this.usersService.getUserById(Number(id));
    };

    @HttpCode(201)
    @Post()
    async createUser(@Body() user: any) {
        return await this.usersService.createUser(user);
    };

    @Post('auth/signin')
    async loginUser(@Body('email') email: string, @Body('password') password: string) {
        return await this.usersService.loginUser(email, password);
    };

    @Put(":id")
    @UseGuards(AuthGuard)
    async updateUserById(@Param("id") id: string, @Body() user: any) {
        const updatedUser = await this.usersService.updateUser(Number(id), user);
        return updatedUser;
    };

    @Delete(":id")
    @UseGuards(AuthGuard)
    async deleteUserById(@Param("id") id: string) {
        return await this.usersService.deleteUser(Number(id));
    };
};