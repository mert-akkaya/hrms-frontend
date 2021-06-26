import axios from "axios";

export default class WorkExperienceService {


    getAll(){
        return axios.get("http://localhost:8080/api/workexperiences/getall");
    }

    getAllByCurriculumVitaeIdAndOrderByFinishDateDesc(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/workexperiences/getAllByCurriculumVitaeIdAndOrderByFinishDate?curriculumVitaeId="+curriculumVitaeId)
    }
    update(workExperienceModel){
        return axios.put("http://localhost:8080/api/workexperiences/update",workExperienceModel)
    }
}