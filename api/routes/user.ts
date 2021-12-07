import * as bodyParser from "body-parser";
import express from "express";

class User {

    public express: express.Application;

    // array to hold users
    public users: any[] = [];
    public contacts: any[] = [];
    public addresses: any[] = [];

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [
            { userId: 1, firstName: "first1", lastName: "last1", email: "abc@gmail.com"},
            { userId: 2, firstName: "first2", lastName: "last2", email: "abc@gmail.com"},
            { userId: 3, firstName: "first3", lastName: "last3", email: "abc@gmail.com"},
            { userId: 4, firstName: "first4", lastName: "last4", email: "abc@gmail.com"},
            { userId: 5, firstName: "first5", lastName: "last5", email: "abc@gmail.com"}
        ];
        this.contacts = [
            { userId: 1, phone: "111-111-1111", fax: "111-111-1111"},
            { userId: 2, phone: "111-112-1112", fax: "222-111-1111"},
            { userId: 3, phone: "111-113-1113", fax: "333-111-1111"},
            { userId: 4, phone: "111-114-1114", fax: "444-111-1111"},
            { userId: 5, phone: "111-115-1115", fax: "555-111-1111"}
        ];
        this.addresses = [
            { userId: 1, streetNumber: "stNum1", streetName: "stName1", city: "city1", state: "state1", zipcode: "11111"},
            { userId: 2, streetNumber: "stNum2", streetName: "stName2", city: "city2", state: "state2", zipcode: "22222"},
            { userId: 3, streetNumber: "stNum3", streetName: "stName3", city: "city3", state: "state3", zipcode: "33333"},
            { userId: 4, streetNumber: "stNum4", streetName: "stName4", city: "city4", state: "state4", zipcode: "44444"},
            { userId: 5, streetNumber: "stNum5", streetName: "stName5", city: "city5", state: "state5", zipcode: "55555"}
        ];
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        // request to get all the users
        this.express.get("/users", (req, res, next) => {
            console.info("url:" + req.url);
            setTimeout(() => res.json(this.users), 2000);
        });

        this.express.get("/contacts", (req, res, next) => {
            console.info("url:" + req.url);
            setTimeout(() => res.json(this.contacts), 6000);
        });

        this.express.get("/addresses", (req, res, next) => {
            console.info("url:" + req.url);
            setTimeout(() => res.json(this.addresses), 4000);
        });

    }
}

export default new User().express;