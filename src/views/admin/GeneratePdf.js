import React, { useState } from "react";
import { saveAs } from "file-saver";
import axios from "axios";

function GeneratePdf() {
  const [state, setstate] = useState({
    name: "",
    id: "",
    first: "",
    adress: "",
  });

 const handelchage=({taget: {value,name}})=>this.setstate({[name]:value})

const generateanddowload =()=>{
    axios.post('/generatePdf',state)
}


  return (
    <div>
      <input
        name="name"
        type="text"
        placeholder="name"
        onChange={handelchage}
      />
      <input
        name="id"
        type="number"
        placeholder="id"
        onChange={handelchage}
      />
      <input
        name="first"
        type="text"
        placeholder="first"
        onChange={handelchage}
      />
      <input
        name="adress"
        type="text"
        placeholder="adress"
        onChange={handelchage}
      />

      <button onClick={generateanddowload}>download</button>
    </div>
  );
}

export default GeneratePdf;
