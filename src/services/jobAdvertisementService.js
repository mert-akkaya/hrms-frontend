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

    getAllByCityAndEmploymentTypeId(cityId,employmentTypeId){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByCityIdAndEmploymentTypeId?cityId="+cityId+"&employmentTypeId="+employmentTypeId)
    }

    getAllByCityId(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByCityId?cityId="+id);
    }

    getAllByEmploymentTypeId(id){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByEmploymentTypeId?employmentTypeId="+id)
    }
    getAllByIsActiveTruePageable(pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByİsActiveTruePageable?pageNo="+pageNo+"&pageSize="+pageSize)
    }
}