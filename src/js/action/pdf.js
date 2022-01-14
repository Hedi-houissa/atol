import { saveAs } from "file-saver";
import axios from "axios";
import { PDFLOAD } from "js/actionType/user";
import { PDFSUCC } from "js/actionType/user";



export const createAndDownloadPdf = (user) => async (dispatch) => {
  dispatch({ type: PDFLOAD }); 
  
  const result = await axios.post("/pdf/createpdf", user)
      .then(() => axios.get(`/pdf/fetch-pdf/${user.siret}`, {responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, `convention-${user.siret}.pdf`);
    })
    console.log(result)

  dispatch({ type: PDFSUCC });
  console.log(user);
};
