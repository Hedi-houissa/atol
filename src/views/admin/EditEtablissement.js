import { updateUser } from "js/action/user";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components

export default function EditEtablissement() {
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
    console.log(currentuser[0]);
  }, [currentuser]);

  const errors = useSelector((state) => state.UserReducer.error);

  const [cpassword, setcpassword] = useState("");
  const changepass = (e) => {
    setcpassword(e.target.value);
  };

  const [user, setuser] = useState(
    //   {
    //   username: "",
    //   password: "",
    //   createAt: new Date(),
    //   createwith: currentuser.id,
    //   representative: "",
    //   registration_number: "", // 14 chiffre
    //   social_reason: "",
    //   city: "",
    //   posat_code: "", //5 chiffre
    //   address: "",
    //   siret: "", //14 chiffre
    //   cram: "",
    //   social_state: "",
    //   atol_state: "",
    // }
    currentuser
  );

  const change = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex justify-center  mt-12" >
        <div className="w-full lg:w-8/12 px-4 mt-12">
          <div className="block flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6 bg-blueGray-100" >
              <div className="text-center flex justify-between ">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  Modifier
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
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Information de l'utilisateur
                </h6>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Nom d'utilisateur
                      </label>
                      <input
                        name="username"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.username}
                      />
                      <small style={{ color: "red" }}>{errors.username}</small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Mot de passe
                      </label>
                      <input
                        name="password"
                        onChange={change}
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.password}
                      />
                      <small style={{ color: "red" }}>{errors.password}</small>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Confirm mot de passe
                      </label>
                      <input
                        name="cpassword"
                        onChange={changepass}
                        type="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        defaultValue="***"
                      />
                      <small style={{ color: "red" }}>{errors.cpassword}</small>
                    </div>
                  </div>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />

                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Contact Information
                </h6>

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
                        value={user.representative}
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
                        value={user.social_reason}
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
                        value={user.city}
                      />
                      <small style={{ color: "red" }}>{errors.city}</small>
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
                        name="post_code"
                        onChange={change}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        value={user.post_code}
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
                        value={user.address}
                      />
                      <small style={{ color: "red" }}>{errors.address}</small>
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
                        value={user.siret}
                      />
                      <small style={{ color: "red" }}>{errors.siret}</small>
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
                        value={user.siren}
                      />
                      <small style={{ color: "red" }}>{errors.siret}</small>
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
                        value={user.itn}
                      />
                      <small style={{ color: "red" }}>{errors.siret}</small>
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
                        value={user.cram}
                      />
                      <small style={{ color: "red" }}>{errors.cram}</small>
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
                        value={user.avocat}
                      />
                      <small style={{ color: "red" }}>{errors.cram}</small>
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
                        id="social_state"
                        onChange={change}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      >
                        <option value={user.social_state}>
                          {user.social_state}
                        </option>
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
                        <option value={user.atol_state}>{user.atol_state}</option>
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
                        value="A beautiful UI Kit and Admin for React & Tailwind CSS. It is Free and Open Source."
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                </div> */}
              </form>
            </div>
            <div className="rounded-t bg-white mb-0 px-6 py-6 bg-blueGray-100">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  {/* Ajouter un établissement */}
                </h6>
                <button
                  className="bg-lightBlue-900 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => dispatch(updateUser(user, cpassword))}
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
