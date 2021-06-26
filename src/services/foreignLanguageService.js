import axios from "axios";

export default class ForeignLanguageService{


    getAllByCurriculumVitaeId(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/foreignlanguages/getAllByCurriculumVitaeId?curriculumVitaeId="+curriculumVitaeId)
    }

    update(foreignLanguageModel){
        return axios.put("http://localhost:8080/api/foreignlanguages/update",foreignLanguageModel)
    }
}