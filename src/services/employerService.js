import axios from 'axios'

export default class EmployerService{

    getEmployer(){
        return axios.get("http://localhost:8080/api/employers/getall");
    } 

    getById(id){
        return axios.get("http://localhost:8080/api/employers/getById?id="+id)
    }

    update(employerModel){
        return axios.put("http://localhost:8080/api/employers/update",employerModel)
    }
}