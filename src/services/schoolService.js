import axios from "axios";

export default class SchoolService{

    getAllByCurriculumVitae(canidateId){
        return axios.get("http://localhost:8080/api/schools/getAllByCurriculumVitae?candidateId="+canidateId);
    }

    update(schoolModel){
        return axios.put("http://localhost:8080/api/schools/update",schoolModel);
    }
}