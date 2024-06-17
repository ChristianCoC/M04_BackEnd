import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
    
    private users = [
        {
            id: 1,
            name: 'Christian',
            email: 'X4lLH@example.com',
            password: 'contraseña24',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        },
        {
            id: 2,
            name: 'Selene',
            email: 'X4lLH@example.com',
            password: 'contraseña24',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        },
        {
            id: 3,
            name: 'Melisa',
            email: 'X4lLH@example.com',
            password: 'contraseña24',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        }
    ];

    async getUsers(): Promise<any[]> {
        return await Promise.resolve(this.users);
    };

    async getUserById(id: number): Promise<any> {
        for (const user of this.users) {
            if (user.id === id) {
                return user;
            }
        }
        return null;
    };

    async createUser(user: any) {
        const id = await Promise.resolve(this.users.length + 1);
        const newUser = {id, ...user};
        await Promise.resolve(this.users.push(newUser));
        return newUser;
    };

    async updateUser(id: number, user: any) {
        const userIndex = await Promise.resolve(this.users.findIndex(user => user.id === id));
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const updatedUser = { id, ...user };
        this.users[userIndex] = updatedUser;
        return updatedUser;
    };

    async deleteUser(id: number) {
        const userIndex = await Promise.resolve(this.users.findIndex(user => user.id === id));
        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const [userDelete] = await Promise.resolve(this.users.splice(userIndex, 1));
        return userDelete;
    };
};