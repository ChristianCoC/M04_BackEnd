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
    async getUsers() {
        return this.users;
    };

    async getUserById(id: number) {
        return this.users.find(user => user.id === id);
    }
};