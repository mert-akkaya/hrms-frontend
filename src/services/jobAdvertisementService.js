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

    getAllByCityAndEmploymentTypeId(cityId,employmentTypeId,pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByCityIdAndEmploymentTypeId?cityId="+cityId+"&employmentTypeId="+employmentTypeId+"&pageNo="+pageNo+"&pageSize="+pageSize)
    }

    getAllByCityId(id,pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByCityId?cityId="+id+"&pageNo="+pageNo+"&pageSize="+pageSize);
    }

    getAllByEmploymentTypeId(id,pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobadvertisements/getAllByEmploymentTypeId?employmentTypeId="+id+"&pageNo="+pageNo+"&pageSize="+pageSize)
    }
    getAllByIsActiveTruePageable(pageNo,pageSize){
        return axios.get("http://localhost:8080/api/jobadvertisements/getByİsActiveTruePageable?pageNo="+pageNo+"&pageSize="+pageSize)
    }
}