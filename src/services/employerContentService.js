import axios from "axios";

export default class EmployerContentService{

    getAll(){
        return axios.get("http://localhost:8080/api/employerUpdateContents/getAll");
    }

    getById(id){
        return axios.get("http://localhost:8080/api/employerUpdateContents/getById?id="+id)
    }

    getByStatusFalse(id){
        return axios.get("http://localhost:8080/api/employerUpdateContents/getByStatusFalse?id="+id);
    }

    getAllByStatusFalse(){
        return axios.get("http://localhost:8080/api/employerUpdateContents/getAllByStatusFalse");
    }

    add(contentModel){
        return axios.post("http://localhost:8080/api/employerUpdateContents/add",contentModel)
    }

    confirmContent(employerId){
        return axios.post("http://localhost:8080/api/employerUpdateContents/confirmContent?employerId="+employerId);
    }
}