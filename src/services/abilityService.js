import axios from "axios";

export default class AbilityService{

    getAll(){
        return axios.get("http://localhost:8080/api/abilities/getall")
    }

    getAllByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/abilities/getAllByCurriculumVitaeId?curriculumVitaeId="+curriculumVitaeId)
    }

    add(abilityModel){
        return axios.post("http://localhost:8080/api/abilities/add",abilityModel)
    }

    update(abilityModel){
        return axios.put("http://localhost:8080/api/abilities/update",abilityModel)
    }

    delete(abilityId){
        return axios.post("http://localhost:8080/api/abilities/delete?abilityId="+abilityId);
    }

}