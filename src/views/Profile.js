import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { getOne } from "js/action/user";

import back from "../assets/img/finance-03.jpg"

export default function Profile({ user }) {
  const [getuser, setgetuser] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  var currentuser ;

  user ? (currentuser = user ) : (currentuser = getuser);

  const dispatch = useDispatch();
  // dispatch(getOne(currentuser.id))
  // const company = useSelector((state) => state.UserReducer.user);
  // console.log(company);

  useEffect(() => {
    // console.log('in eff')
    dispatch(getOne(getuser.id));

  }, [currentuser, dispatch]);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                `url(${back})`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
              <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={require("assets/img/team-2-800x800.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  {/* <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span> */}
                </div>
                <div className="mr-4 p-3 text-center">
                  {/* <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span> */}
                  {/* <span className="text-sm text-blueGray-400">Photos</span> */}
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  {/* <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span> */}
                </div>
              </div>
            </div>
          </div>
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Nom d'utilisateur :</b>
                      {currentuser.username}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Responsable :</b>
                      {currentuser.representative}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Raison sociale : </b> {currentuser.social_reason}
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-6/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Date de Creation :</b>
                      {currentuser.createAt}
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Siret :</b> {currentuser.siret}
                    </div>
                  </div>
                  <div className="w-full lg:w-3/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Cram :</b>
                      {currentuser.cram}
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center">
                  
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Ville :</b>
                      {currentuser.city}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>Adresse :</b>
                      {currentuser.address}
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-left lg:self-center">
                    <div
                      className="py-6 px-3 mt-32 sm:mt-0"
                      style={{ fontSize: "20px" }}
                    >
                      <b>code postal :</b>
                      {currentuser.posat_code}
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <a
                        href="/admin/modifier_profile"
                        className="font-normal text-lightBlue-500"
                       
                      >
                        Modifier
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
