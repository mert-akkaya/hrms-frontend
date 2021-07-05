import axios from "axios";

export default class SchoolService{

    getAllByCurriculumVitae(canidateId){
        return axios.get("http://localhost:8080/api/schools/getAllByCurriculumVitae?candidateId="+canidateId);
    }

    add(schoolModel){
        return axios.post("http://localhost:8080/api/schools/add",schoolModel);
    }

    update(schoolModel){
        return axios.put("http://localhost:8080/api/schools/update",schoolModel);
    }

    delete (schoolId){
        return axios.post("http://localhost:8080/api/schools/delete?schoolId="+schoolId);
    }
}