import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
// components

import CardTable from "components/Cards/CardTable.js";
import { getByCompany } from "js/action/user";

export default function ListeCompany() {
  const [currentuser, setcurrentuser] = useState(
    JSON.parse(localStorage.getItem("token"))
  );
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.UserReducer.error);
  const listCompany = useSelector((state) => state.UserReducer.listUser);

  useEffect(() => {
    listCompany.length === 0 && dispatch(getByCompany(currentuser.id));
  }, [currentuser.id, dispatch, listCompany]);

  const color = "dark";
  return (
    <>
      <div className="flex justify-center flex-wrap mt-4 " style={{ marginTop: "10rem" }}>
        <div className="w-full lg:w-8/12 mb-12 px-4">{/* <CardTable /> */}</div>
        <div className="w-full lg:w-8/12 mb-12 px-4">
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              (color === "light" ? "bg-white" : "bg-lightBlue-600 text-white")
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0 bg-white">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-2xl " +
                      (color === "light" ? "text-blueGray-600" : "text-blueGray-600")
                    }
                  >
                    Liste des sociétés
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Raison sociale
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Responsable
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Siret
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      cram
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      Etat Atol
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xm uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                      }
                    >
                      État société
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listCompany.map((c) => (
                    <>
                      <tr key={c.id}>
                       
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                          {c.social_reason}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                          {c.representative}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                          {c.siret}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                          <div className="flex">{c.cram}</div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                          <div className="flex items-center">
                            {c.atol_state}
                          </div>
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xm whitespace-nowrap p-4">
                          <div className="flex items-center">
                            {c.social_state}
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
CardTable.defaultProps = {
  color: "light",
};

// CardTable.propTypes = {
//   color: PropTypes.oneOf(["light", "dark"]),
// };
