import axios from 'axios'

export default class EmployeeService{
    
    getEmployees(){
        return axios.get("http://localhost:8080/api/employees/getAll");
    }

    getEmployerById(id){
        return axios.get("http://localhost:8080/api/employees/getById?id="+id)
    }

    add(employee){
        return axios.post("http://localhost:8080/api/employees/add",employee)
    }

    update(employee){
        return axios.put("http://localhost:8080/api/employees/update",employee)
    }
}