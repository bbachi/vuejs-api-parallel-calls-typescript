const axios = require('axios');

export class UserService {

    public async getUsers() {
        return await axios.get('/api/users');
    }

    public async getContacts() {
        return await axios.get('/api/contacts');
    }

    public async getAddresses() {
        return await axios.get('/api/addresses');
    }

    public async getUserInfo() {

        try{
            const responses = await Promise.all([this.getUsers(), this.getContacts(), this.getAddresses()]);


            console.log(responses)
            
            const users = responses[0].data;
            const contacts = responses[1].data;
            const addresses = responses[2].data;
            const result: any = [];
            users.map((user: any) => {
            result.push({
                ...user, 
                ...contacts.find((contact: any) => contact.userId === user.userId), 
                ...addresses.find((address: any) => address.userId === address.userId)})
            });
            return result;
            
        }catch(error) {
            return [];
        }
    }
}