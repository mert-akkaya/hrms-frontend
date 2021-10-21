import axios from "axios";

export default class AuthService{

   registerForCandidate(registerForCandidateModel){
    return axios.post("http://localhost:8080/api/auth/registerForCandidate",registerForCandidateModel)
   }

   registerForEmployer(registerForEmployerModel){
      return axios.post("http://localhost:8080/api/auth/registerForEmployer",registerForEmployerModel)
   }

}