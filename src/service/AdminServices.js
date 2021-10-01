import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/admin';

class AdminService {

     fetchCustomer() {
     return axios.get('http://localhost:8080/users/'+'getCustomer');
     }

     
     fetchArtist() {
        return axios.get('http://localhost:8080/users/'+'getArtist');
        }

        
     fetchAdmin() {
        return axios.get('http://localhost:8080/users/'+'/getAdmin');
        }

    // fetchUserById(userId) {
    //     return axios.get(USER_API_BASE_URL + '/getById' + userId);
    // }

    // deleteUser(userId) {
    //     return axios.delete(USER_API_BASE_URL + '/delete' + userId);
    // }

    addPlacementRecords(student) {
        return axios.post(USER_API_BASE_URL + '/placements', student);
    }

    // authenticateUser(Email) {
    //     return axios.get(USER_API_BASE_URL + '/email' + Email);
    // }

    // editUser(user) {
    //     return axios.put(USER_API_BASE_URL + '/update' + user.id, user);
    // }

    // addContact(contact) {
    //     return axios.post('http://localhost:8080' + '/contact', contact);
    // }
    fetchPlacementRecords(){
        return axios.get(USER_API_BASE_URL + '/placements');
    }

    addArtist(user) {
        return axios.post(USER_API_BASE_URL + '/saveFaculty', user);
    }
    addAdmin(user) {
        return axios.post(USER_API_BASE_URL + '/saveAdmin', user);
    }
   
}

export default new AdminService();