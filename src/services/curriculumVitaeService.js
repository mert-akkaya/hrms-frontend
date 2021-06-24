import axios from "axios";

export default class CurriculumVitaeService{
    
    getCurriculumVitaes(){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getall")
    }

    getCurriculumVitaeByCandidateId(id){
        return axios.get("http://localhost:8080/api/curriculumvitaes/getbycandidateid?id=1");
    }
}