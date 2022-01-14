import axios from "axios";
import {
  USERFAIL,
  USERLOAD,
  LOGINUSERSUCC,
  LOGOUT,
  USERSUCC,
  LISTUSERSUCC,
} from "../actionType/user";

//**************************** */

export const loginUser = (user) => async (dispatch) => {
    console.log("in login");
    console.log("username",user.username)
    console.log("password ",user.password)
  
    dispatch({ type: USERLOAD });
    try {
      const result = await axios.post("/user/login", user);
      console.log('try login',result)
      dispatch({ type: LOGINUSERSUCC, payload: result.data.user });
      localStorage.setItem("token",JSON.stringify( result.data.user));
  
      window.location = "http://localhost:3000/admin/dashboard";
  
    } catch (error) {
    // console.log(error.response.data)
      dispatch({ type: USERFAIL, payload:error.response.data });
    }
  };

  //****************************** */

export const getByCompany = (id) => async (dispatch) => {
    console.log("getMyCompany");
    console.log("id",id)
  
    dispatch({ type: USERLOAD });
    try {
      const result = await axios.get(`/user/bycompany/${id}`, );
      console.log('try login',result)
      dispatch({ type: LISTUSERSUCC, payload: result.data });
    
    } catch (error) {
    // console.log(error.response.data)
      dispatch({ type: USERFAIL, payload:error.response.data });
    }
  };

  //****************************** */
export const getOne = (id) => async (dispatch) => {
    console.log("getone");
    console.log("id",id)
  
    dispatch({ type: USERLOAD });
    try {
      const result = await axios.get(`/user/one/${id}`, );
      console.log('try login',result)
      localStorage.setItem("token",JSON.stringify( result.data[0]));
      dispatch({ type: USERSUCC, payload: result.data });
    
    } catch (error) {
    // console.log(error.response.data)
      dispatch({ type: USERFAIL, payload:error.response.data });
    }
  };
  /***************************** */

  export const logout = () => {
    localStorage.removeItem("token");
    window.location = "/";
    return { type: LOGOUT };
  };
/*********************************** */

  export const addUser = (user,cpass) => async (dispatch) => {
    console.log("in login");
    console.log("user",user)
    user.roles="COMPANY"

    let err = {} ;
    dispatch({ type: USERFAIL, payload:err });



    if(user.username===""|| !isNaN(user.username) || (user.username).length<4){
      err.username="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    if(user.password===""||(user.password).length<8 ){
      err.password="le champ est obligatoire, doit être alphabetique au minimum huit lettres "
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    if(user.password!==cpass ){
      err.cpassword="les deux mots de passe ne sont pas identiques "
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

   
  
    dispatch({ type: USERLOAD });
    try {
      const result = await axios.post("/user/ajout", user);
      console.log('try add',result)
      dispatch({ type: USERSUCC, payload: result.data.msg });  
      window.location = "http://localhost:3000/admin/tables";
  
    } catch (error) {
    console.log(error.response.data)
      dispatch({ type: USERFAIL, payload:error.response.data });
    }
  };




/**************************************** */
  export const updateUser = (user,cpass) => async (dispatch) => {
    console.log("in login");
    console.log("user",user)
    console.log(cpass)
    user.roles="COMPANY"

    let err = {} ;
    dispatch({ type: USERFAIL, payload:err });



    if(user.username===""|| !isNaN(user.username) || (user.username).length<4){
      err.username="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    if(user.password===""||(user.password).length<8 ){
      err.password="le champ est obligatoire, doit être alphabetique au minimum huit lettres "
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    if(user.password!==cpass ){
      err.cpassword="les deux mots de passe ne sont pas identiques "
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    if(user.representative===""|| !isNaN(user.representative) || (user.representative).length<4){
      err.representative="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    // if(user.registration_number===""|| isNaN(user.registration_number) || (user.registration_number).length<14){
    //   err.registration_number="champs obligatoire et min 14 chiffre"
    //   dispatch({ type: USERFAIL, payload:err });
    //   return ;
    // }

    if(user.social_reason===""|| !isNaN(user.social_reason) || (user.social_reason).length<4){
      err.social_reason="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    if(user.city===""|| !isNaN(user.city) || (user.city).length<4){
      err.city="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }
   
    if(user.post_code===""|| isNaN(user.post_code) || (user.post_code).length<5){
      err.posat_code="le champ est obligatoire, doit être alphabetique au minimum cinq chiffres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }
    if(user.address===""|| !isNaN(user.address) || (user.address).length<15){
      err.address="le champ est obligatoire, doit être alphabetique au minimum quinze lettres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }
    

    if(user.siret===""|| isNaN(user.siret) || (user.siret).length<14){
      err.siret="le champ est obligatoire, doit être alphabetique au minimum quatorze chiffres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

    if(user.cram===""|| !isNaN(user.cram) || (user.cram).length<4){
      err.cram="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }
    if(user.social_state===""){
      err.social_state="Selection l'un des choix est possible"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }
    if(user.atol_state===""){
      err.atol_state="Selection l'un des choix est possible"
      dispatch({ type: USERFAIL, payload:err });
      return ;
    }

   
  
    dispatch({ type: USERLOAD });
    try {
      const result = await axios.put("/user/modifier", user);
      console.log('try add',result)
      localStorage.setItem("token",JSON.stringify( user));

      dispatch({ type: USERSUCC, payload: result.data.msg });  
      // window.location.reload();
      window.location.href="http://localhost:3000/profile";
  
    } catch (error) {
    console.log(error.response.data)
      dispatch({ type: USERFAIL, payload:error.response.data });
    }



  };


  
 