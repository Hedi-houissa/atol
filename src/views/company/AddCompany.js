import { addUser } from "js/action/user";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components

export default function AddCompany() {
  const dispatch = useDispatch();
  const [currentuser, setcurrentuser] = useState(
    JSON.parse(localStorage.getItem("token"))
  );
  const [date, setdate] = useState("");

  const getCurrentDate = (separator = "-") => {
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date}`;
  };

  useEffect(() => {
    setdate(getCurrentDate());
    !currentuser && setcurrentuser(JSON.parse(localStorage.getItem("token")));
    console.log(currentuser);
  }, [currentuser]);

  const errors = useSelector((state) => state.UserReducer.error);

  const [cpassword, setcpassword] = useState("");
  const changepass = (e) => {
    setcpassword(e.target.value);
  };

  const [user, setuser] = useState({
    createAt: new Date(),
    createwith: currentuser.id,
    representative: "responsable ",
    registration_number: "null", // 14 chiffre
    social_reason: "raison social",
    city: "ville",
    post_code: "75000", //5 chiffre
    address: "Adresse",
    siret: "142536987456", //14 chiffre
    siren: "142536987456", //14 chiffre
    itn: "142536987456", //14 chiffre
    cram: "paris",
    social_state: "situation sociale ", 
    atol_state: "situations atol",
    avocat: "avocat",
  });

  const change = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className=" flex flex-wrap px-4 " style={{marginTop:'10rem'}}>
        <div className="w-full lg:w-12/12 px-4">
          <div className=" top-4 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="bg-blueGray-100 rounded-t bg-white mb-0 px-6 py-6 ">
              <div className="  text-center flex justify-between ">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Ajouter une société
                </h6>
                <small style={{ color: "red" }}>{errors.msg}</small>
                {/* <button
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Settings
                </button> */}
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 ">
              <form>
                {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Information de l'utilisateur
                </h6> */}
                <div className="flex flex-wrap">
                  
                  
                  
                </div>

                {/* <hr className="mt-6 border-b-1 border-blueGray-300" /> */}

                {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6> */}

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Responsable de la société
                      </label>
                      <input
                        name="representative"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Danya"
                      />
                      <small style={{ color: "red" }}>
                        {errors.representative}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Raison sociale
                      </label>
                      <input
                        name="social_reason"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Atol"
                      />
                      <small style={{ color: "red" }}>
                        {errors.social_reason}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Ville
                      </label>
                      <input
                        name="city"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Paris"
                      />
                      <small style={{ color: "red" }}>
                        {errors.city}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Code postal
                      </label>
                      <input
                        name="posat_code"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="75000"
                      />
                      <small style={{ color: "red" }}>
                        {errors.posat_code}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Addresse
                      </label>
                      <input
                        name="address"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="Rue paris"
                      />
                      <small style={{ color: "red" }}>
                        {errors.address}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Siret
                      </label>
                      <input
                        name="siret"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="14253698745896"
                      />
                      <small style={{ color: "red" }}>
                        {errors.siret}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Siren
                      </label>
                      <input
                        name="siren"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="14253698745896"
                      />
                      <small style={{ color: "red" }}>
                        {errors.siren}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        ITN
                      </label>
                      <input
                        name="itn"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="14253698745896"
                      />
                      <small style={{ color: "red" }}>
                        {errors.itn}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Cram
                      </label>
                      <input
                        name="cram"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="région"
                      />
                      <small style={{ color: "red" }}>
                        {errors.cram}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Avocat
                      </label>
                      <input
                        name="avocat"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="région"
                      />
                      <small style={{ color: "red" }}>
                        {errors.avocat}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Status Social
                      </label>

                      <select
                        name="social_state"
                        id="atol_state"
                        onChange={change}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">-- Selectionner un status --</option>
                        <option value="actif">actif </option>
                        <option value="liquidation">liquidation</option>
                      </select>
                      <small style={{ color: "red" }}>
                        {errors.social_state}
                      </small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Atol Social
                      </label>

                      <select
                        name="atol_state"
                        id="atol_state"
                        onChange={change}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value="">-- Selectionner une état --</option>
                        <option value="ouvert">ouvert</option>
                        <option value="fermé">fermé </option>
                        <option value="en mode négociation">
                          en mode négociation
                        </option>
                      </select>
                      <small style={{ color: "red" }}>
                        {errors.atol_state}
                      </small>
                    </div>
                  </div>
                </div>

                {/* <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  About Me
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        About me
                      </label>
                      <textarea
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div> */}
              </form>
            </div>
            <div className="bg-blueGray-100 rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  {/* Ajouter un établissement */}
                </h6>
                <button
                  className="bg-lightBlue-900 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => dispatch(addUser(user, cpassword))}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
