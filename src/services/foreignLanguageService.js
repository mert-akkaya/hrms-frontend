import axios from "axios";

export default class ForeignLanguageService{


    getAllByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/foreignlanguages/getAllByCurriculumVitaeId?curriculumVitaeId="+curriculumVitaeId)
    }

    add(foreignLanguageModel){
        return axios.post("http://localhost:8080/api/foreignlanguages/add",foreignLanguageModel);
    }
    
    update(foreignLanguageModel){
        return axios.put("http://localhost:8080/api/foreignlanguages/update",foreignLanguageModel)
    }
    
    delete(foreignlanguageId){
        return axios.post("http://localhost:8080/api/foreignlanguages/delete?foreignLanguageId="+foreignlanguageId);
    }
}