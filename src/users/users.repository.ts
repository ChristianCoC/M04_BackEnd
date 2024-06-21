import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

function validateUser(users:any) {
    return (
        typeof users.name === 'string' && 
        typeof users.email === 'string' && 
        typeof users.password === 'string' &&
        typeof users.adress === 'string' &&
        typeof users.phone === 'string' &&
        typeof users.country === 'string' &&
        typeof users.city === 'string'
    )
};

@Injectable()
export class UsersRepository {
    
    private users = [
        {
            id: 1,
            name: 'Christian',
            email: 'X4lLHC@example.com',
            password: 'contraseña01',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        },
        {
            id: 2,
            name: 'Selene',
            email: 'X4lLHS@example.com',
            password: 'contraseña02',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        },
        {
            id: 3,
            name: 'Melisa',
            email: 'X4lLHM@example.com',
            password: 'contraseña03',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        },
        {
            id: 4,
            name: 'Victoria',
            email: 'X4lLHV@example.com',
            password: 'contraseña04',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        },
        {
            id: 5,
            name: 'Adriana',
            email: 'X4lLHA@example.com',
            password: 'contraseña05',
            adress: 'Rivadavia 123',
            phone: '1122334455',
            country: 'San Martin' || undefined,
            city: 'Buenos Aires' || undefined,
        }
    ];

    async getUsers(page: number, limit: number): Promise<Omit<any, 'password'>[]> {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        return this.users.map(({ password, ...rest }) => rest).slice(startIndex, endIndex);
    };
    
    async getUserById(id: number): Promise<Omit<any, 'password'> | null> {
        for (const { password, ...user } of this.users) {
            if (user.id === id) {
                return user;
            }
        }
        return null;
    };
    
    async createUser(user: any) {
        if (!validateUser(user)) {
            throw new BadRequestException('Invalid user');
        }
        const id = this.users.length + 1;
        const newUser = { id, ...user };
        this.users.push(newUser);
        return {message: 'User created', newUser};
    };
    
    async updateUser(id: number, user: any) {
        if (!validateUser(user)) {
            throw new BadRequestException('Invalid user');
        }
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException('User not found');
        }
        const updatedUser = { id, ...user };
        this.users[userIndex] = updatedUser;
        return {message: 'User updated', updatedUser};
    };
    
    async deleteUser(id: number) {
        const userIndex = this.users.findIndex(user => user.id === id);
        if (userIndex === -1) {
            throw new NotFoundException('User not found');
        }
        const [userDeleted] = this.users.splice(userIndex, 1);
        return {message: 'User deleted', userDeleted};
    };

    async loginUser(email: string, password: string) {
        if(!email || !password) {
            throw new BadRequestException('email and password are required');
        }
        const user = this.users.find(user => user.email === email && user.password === password);
        if(!user) {
            throw new BadRequestException('Invalid email or password');
        }
        return {message: 'Login successful', user};
    };

}