const express = require('express');
const faker = require('faker');

const app = express();
app.use(express.json());

app.listen(8000, () => console.log('listening on port 8000'));

class User {
    constructor() {
        this.id = faker.random.number();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = faker.random.number();
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country(),
        }
    }
}

const newUser = new User();
const newCompany = new Company();

app.get("/api/users/new", (req, res) => {
    res.json(newUser);
});

app.get("/api/company/new", (req, res) => {
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: newUser,
        company: newCompany
    });
});