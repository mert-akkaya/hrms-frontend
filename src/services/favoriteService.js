import axios from "axios";

export default class FavoriteService{

    getAll(){
        return axios.get("http://localhost:8080/api/favorites/getAll");
    }

    getByCandidateAndJobAdvertismenetId(candidateId,jobAdvertisementId){
        return axios.get("http://localhost:8080/api/favorites/getByCandidateAndJobAdvertisementId?candidateId="+candidateId+"&jobAdvertismentId="+jobAdvertisementId)
    }
    add(favorite){
        return axios.post("http://localhost:8080/api/favorites/add",favorite)
    }

    delete(favorite){
        return axios.post("http://localhost:8080/api/favorites/delete",favorite)
    }
}