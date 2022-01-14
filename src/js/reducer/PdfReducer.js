import { PDFFAIL } from "js/actionType/user";
import { PDFSUCC } from "js/actionType/user";
import { PDFLOAD } from "js/actionType/user";


const initState = {
    load: false,
    error: [],
  };
  


export const PdfReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case PDFLOAD : 
        return { ...state, load: true };
case PDFSUCC :
    return { ...state, load: false };
    case PDFFAIL : 
    return { ...state, load: false };
    default :
    return { ...state  };



    }
}

export default PdfReducer ;