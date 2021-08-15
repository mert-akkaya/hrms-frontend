import axios from 'axios'

export default class JobAdvertisementService{

    getJobAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAll");
    }

    getJobAdvertisementById(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getById?id="+id);
    }

    getAllByIsActiveTrue(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByIsActiveTrue");
    }

    addJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobadvertisements/add",jobAdvertisement); 
    }

    setActiveTrue(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/changeStatus?id="+id);
    }

    deleteJobAdvertisement(jobAdvertisement){
        return axios.post("http://localhost:8080/api/jobadvertisements/delete",jobAdvertisement);
    }

    getAllByIsActiveTruePageable(pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByİsActiveTruePageable?pageNo="+pageNo+"&pageSize="+pageSize)
    }

    getAllByIsActiveTrueAndFilter(pageNo,pageSize,filter){
        return axios.post(`http://localhost:8080/api/jobadvertisements/getAllByIsActiveTrueAndFilter?pageNo=${pageNo}&pageSize=${pageSize}`,filter)
    }

    getAllByIsActiveTrueAndEmployerId(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByIsActiveTrueAndEmployerId?id="+id);
    }

    getAllByIsActiveFalseAndEmployerId(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByIsActiveFalseAndEmployerId?id="+id);
    }

}