import axios from "axios";

export default class WorkExperienceService {


    getAll(){
        return axios.get("http://localhost:8080/api/workexperiences/getall");
    }

    getAllByCurriculumVitaeIdAndOrderByFinishDateDesc(curriculumVitaeId){
        return axios.get("http://localhost:8080/api/workexperiences/getAllByCurriculumVitaeIdAndOrderByFinishDate?curriculumVitaeId="+curriculumVitaeId)
    }

    add(workExperienceModel){
        return axios.post("http://localhost:8080/api/workexperiences/add",workExperienceModel)
    }

    update(workExperienceModel){
        return axios.put("http://localhost:8080/api/workexperiences/update",workExperienceModel)
    }

    delete(workExperienceId){
        return axios.post("http://localhost:8080/api/workexperiences/delete?workExperienceId="+workExperienceId)
    }
}