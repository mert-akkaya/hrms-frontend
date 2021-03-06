import axios from "axios";

export default class CurriculumVitaeService{
    
    getCurriculumVitaes(){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getall")
    }

    getCurriculumVitaeByCandidateId(id){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getbycandidateid?id="+id);
    }

    getById(id){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getById?id="+id);
    }

    update(curriculumVitae){
        return axios.put("http://localhost:8080/api/curriculumvitaes/update",curriculumVitae)
    }
    
}