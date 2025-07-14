export class UsersService {
    users: { id: number, name: string, email: string, age: number, gender: string, isMarried: boolean }[] = [
        { id: 1, name: "Joel", email: "joel@gmail.com", age: 50, gender: "male", isMarried: false, },
        { id: 2, name: "Avram", email: "avram@gmail.com", age: 60, gender: "male", isMarried: false, },
        { id: 3, name: "Taylor", email: "taylor@gmail.com", age: 60, gender: "female", isMarried: false, },
    ];

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find(x => x.id === id);
    }

    createUser(user: { id: number, name: string, email: string, age: number, gender: string, isMarried: boolean }) {
        this.users.push(user);
    }

}