/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";
import { Users } from "./users.entity";

@Injectable()
export class UsersService {
    
    constructor(private usersRepository: UsersRepository) {};

    async getUsers(page: number, limit: number) {
        return await this.usersRepository.getUsers(page, limit);
    };

    async getUserById(id: string) {
        return await this.usersRepository.getUserById(id);
    };

    async createUser(user: Users) {
        return await this.usersRepository.createUser(user);
    };

    async updateUser(id: string, user: Users) {
        return await this.usersRepository.updateUser(id, user);
    };

    async deleteUser(id: string) {
        return await this.usersRepository.deleteUser(id);
    };

    async loginUser(email: string, password: string) {
        return await this.usersRepository.loginUser(email, password);
    };
}