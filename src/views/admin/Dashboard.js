import React, { useEffect, useState } from "react";
import QRCode from "qrcode";
import "./card.css";
// components

import liste from "../../assets/img/landing.jpg"
import convention from "../../assets/img/profile.jpg"
import add from "../../assets/img/addone.jpg"


export default function Dashboard() {
  const [currentuser, setcurrentuser] = useState(
    JSON.parse(localStorage.getItem("token"))
  );

  const [src, setsrc] = useState("");

  useEffect(() => {
    QRCode.toDataURL("/docment/currentuser.pdf").then((data) => {
      setsrc(data);
    });
  }, []);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <CardLineChart /> */}
        </div>
        <div className="w-full xl:w-4/12 px-4">
          {/* <CardBarChart /> */}
          <br />
        </div>

        <div style={{ margin: "5% auto" }}></div>
        {/* <img src={photo} alt="impo" /> */}
      </div>
      <div className="flex flex-wrap ">
        {currentuser.roles === "ADMIN" ? (
          <>
            <div className="w-full xl:w-3/12 mb-12 xl:mb-0 px-4"
            onClick={()=>window.location.href="/admin/list"}
            >
              <div className="profile-card-4 text-center">
                <img
                  src={liste}
                  alt=""
                  className="img img-responsive"
                />
                <div className="profile-content">
                
                  <div className="profile-description">
                  <div className="font-bold text-xl text-black">
                  Liste des établissement
                  </div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-3/12 mb-12 xl:mb-0 px-4"
            
            onClick={()=>window.location.href="/admin/Ajouter_etablissement"}
            >
              <div className="profile-card-4 text-center">
                <img
                  src={add}
                  alt=""
                  className="img img-responsive"
                />
                <div className="profile-content">
                 
                  <div className="profile-description">
                  <div className="font-bold text-xl text-black">
                    Ajouter un établissement
                  </div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-3/12 mb-12 xl:mb-0 px-4">
              <div className="profile-card-4 text-center">
                <img
                  src={convention}
                  alt=""
                  className="img img-responsive"
                />
                <div className="profile-content">
                  
                  <div className="profile-description">
                  <div className="font-bold text-xl text-black" >
                    Liste des convention
                  </div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
             <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
              <div className="profile-card-4 text-center">
                <img
                  src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
                  alt=""
                  className="img img-responsive"
                />
                <div className="profile-content">
                  <div className="profile-name">
                    Liste des société
                    <p>@johndoedesigner</p>
                  </div>
                  <div className="profile-description">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
              <div className="profile-card-4 text-center">
                <img
                  src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
                  alt=""
                  className="img img-responsive"
                />
                <div className="profile-content">
                  <div className="profile-name">
                   Ajouter une socitété
                    <p>en réduisant votre budget</p>
                  </div>
                  <div className="profile-description">
                    Le cabinet de conseil et accompagnement IT Danya Conseil,
                    aide les entreprises à améliorer la productivité de leurs
                    équipes informatiques et de leurs processus métiers.
                  </div>
                </div>
              </div>
            </div>
           
            <div className="w-full xl:w-4/12 mb-12 xl:mb-0 px-4">
              <div className="profile-card-4 text-center">
                <img
                  src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-4.jpg"
                  alt=""
                  className="img img-responsive"
                />
                <div className="profile-content">
                  <div className="profile-name">
                    Convention
                    <p>Afficher</p>
                  </div>
                  <div className="profile-description">
                    Télécharger
                  </div>
                </div>
              </div>
            </div>

         
          </>
        )}
      </div>
    </>
  );
}
