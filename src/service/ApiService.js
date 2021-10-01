import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL +'/getUsers');
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/getById' + userId);
    }

    deleteUser(id) {
        return axios.delete(USER_API_BASE_URL + '/delete/' + id);
    }

    addUser(user) {
        return axios.post(USER_API_BASE_URL + '/addCustomer', user);
    }

    addArtist(user) {
        return axios.post(USER_API_BASE_URL + '/addArtist', user);
    }

    addAdmin(user) {
        return axios.post(USER_API_BASE_URL + '/addAdmin', user);
    }


   
    authenticateUser(user) {
        return axios.post(USER_API_BASE_URL + '/authenticateUser', user);
    }

    editUser(user) {
        return axios.put(USER_API_BASE_URL + '/update' + user.id, user);
    }

    addContact(contact) {
        return axios.post('http://localhost:8080' + '/contact', contact);
    }
    
    addProduct(product) {
        return axios.post(USER_API_BASE_URL  + '/product/', product);
    }

    getProduct(id) {
        return axios.get(USER_API_BASE_URL  + '/product/' +id);
    }

 

}

export default new ApiService();