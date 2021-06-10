import axios from 'axios'

export default class JobAdvertisementService{

    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAll");
    }

    getJobAdvertisementById(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getById?id="+id);
    }
}