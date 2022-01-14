import { COMPANYLOAD } from "js/actionType/company";
import { ADDCOMPANYFAIL } from "js/actionType/company";

import axios from "axios";
import { ADDCOMPANYSUCC } from "js/actionType/company";




/**************************************** */
export const updateUser = (user) => async (dispatch) => {
    console.log("in login");
    console.log("user",user)

    let err = {} ;
    dispatch({ type: ADDCOMPANYFAIL, payload:err });

    if(user.representative===""|| !isNaN(user.representative) || (user.representative).length<4){
      err.representative="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }

    if(user.social_reason===""|| !isNaN(user.social_reason) || (user.social_reason).length<4){
      err.social_reason="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }

    if(user.city===""|| !isNaN(user.city) || (user.city).length<4){
      err.city="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
   
    if(user.post_code===""|| isNaN(user.post_code) || (user.post_code).length<5){
      err.posat_code="le champ est obligatoire, doit être alphabetique au minimum cinq chiffres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
    if(user.address===""|| !isNaN(user.address) || (user.address).length<15){
      err.address="le champ est obligatoire, doit être alphabetique au minimum quinze lettres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
    

    if(user.siret===""|| isNaN(user.siret) || (user.siret).length<14){
      err.siret="le champ est obligatoire, doit être alphabetique au minimum quatorze chiffres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
    if(user.siren===""|| isNaN(user.siren) || (user.siren).length<14){
      err.siren="le champ est obligatoire, doit être alphabetique au minimum quatorze chiffres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
    if(user.itn===""|| isNaN(user.itn) || (user.itn).length<14){
      err.itn="le champ est obligatoire, doit être alphabetique au minimum quatorze chiffres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
    if(user.avocat===""){
      err.avocat="le champ est obligatoire"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }

    if(user.cram===""|| !isNaN(user.cram) || (user.cram).length<4){
      err.cram="le champ est obligatoire, doit être alphabetique au minimum quatre lettres"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
    if(user.social_state===""){
      err.social_state="Selection l'un des choix est possible"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }
    if(user.atol_state===""){
      err.atol_state="Selection l'un des choix est possible"
      dispatch({ type: ADDCOMPANYFAIL, payload:err });
      return ;
    }

   
  
    dispatch({ type: COMPANYLOAD });
    try {
      const result = await axios.put("/company/add", user);
      console.log('try add',result)
      localStorage.setItem("token",JSON.stringify( user));

      dispatch({ type: ADDCOMPANYSUCC, payload: result.data.msg });  
      // window.location.reload();
      window.location.href="http://localhost:3000/companyliste";
  
    } catch (error) {
    console.log(error.response.data)
      dispatch({ type: ADDCOMPANYFAIL, payload:error.response.data });
    }



  };


  
 