import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Users } from "./users.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UsersRepository {

    constructor(@InjectRepository(Users) private usersRepository: Repository<Users>) { }

    async getUsers(page: number, limit: number): Promise<Omit<Users, 'password'>[]> {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        return this.usersRepository.find({ skip: startIndex, take: endIndex });
    };

    async getUserById(id: string): Promise<Omit<Users, 'password'> | null> {
        if (!id) {
            throw new NotFoundException('User not found');
        }
        try {
            return await this.usersRepository.findOneBy({ id: id });
        } catch (error) {
            throw new BadRequestException('Failed to get user', error);
        }
        return null;

    };

    async createUser(user: Users): Promise<Users> {
        return await this.usersRepository.save(user);

    };

    async updateUser(id: string, user: Users): Promise<Users> {
        if (!id) {
            throw new NotFoundException('User not found');
        }
        try {
            await this.usersRepository.update(id, user);
            const updatedUser = await this.usersRepository.findOneBy({ id: id });
            if (!updatedUser) {
                throw new NotFoundException('User not found');
            }
            return updatedUser;

        } catch (error) {
            throw new BadRequestException('Failed to update user', error);
        }
    };

    async deleteUser(id: string): Promise<{ message: string, id: string, name: string }> {
        if (!id) {
            throw new BadRequestException('Id not found');
        }
        try {
            const user = await this.usersRepository.findOneBy({ id: id });
            if (!user) {
                throw new NotFoundException('User whit id ${id} not found');
            }
            await this.usersRepository.delete({ id: id });
            return {
                message: 'User deleted successfully',
                id: user.id,
                name: user.name
            };

        } catch (error) {
            throw new BadRequestException('Failed to delete user', error);
        }
    };

    async loginUser(email: string, password: string) {

    };

}