import axios from "axios";

export default class AbilityService{

    getAll(){
        return axios.get("http://localhost:8080/api/abilities/getall")
    }

    getAllByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/abilities/getAllByCurriculumVitaeId?curriculumVitaeId="+curriculumVitaeId)
    }

    update(abilityModel){
        return axios.put("http://localhost:8080/api/abilities/update",abilityModel)
    }
}