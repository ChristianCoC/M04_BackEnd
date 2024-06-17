/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    
    constructor(private usersRepository: UsersRepository) {};

    async getUsers() {
        return await this.usersRepository.getUsers();
    };

    async getUserById(id: number) {
        return await this.usersRepository.getUserById(id);
    };

    async createUser(user: any) {
        return await this.usersRepository.createUser(user);
    };

    async updateUser(id: number, user: any) {
        return await this.usersRepository.updateUser(id, user);
    };

    async deleteUser(id: number) {
        return await this.usersRepository.deleteUser(id);
    };
}