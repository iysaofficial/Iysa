import React, { useEffect } from 'react';

const NationalAffiliation = () => {
  useEffect(() => {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);
  return (
    <section className="affiliation-section">
      <br></br>
      <br></br>
      <br></br>
      <div className="container">
        <h2 className="text-center">National Affiliation</h2>
        <div className="logos">
        <div className="logos-slide">
            <img src="./assets/images/logo/National Affiliation/IPB.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/unikom.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/PPI.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/UD.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/UINN.WebP" alt="" /> */}
            {/* <img src="./assets/images/logo/National Affiliation/UINUJ.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/i3l.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/UMK.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/unikom.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/UP.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/UST.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/LOGOKEMENAG.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/USY.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/UU.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/UTS.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/ck.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/isb.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/jgu.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/FT UNBRAW.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/FT UNDIP.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/GISA.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/HIMITEPA.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/ICGI.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/IYORA.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/LIBERIKA.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/MIPA UGM.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/PNM.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/POLINES.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/RESOLUTION.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/TARNUS.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/UDINUS.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/UI.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/UIN YOGYA.png" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/UMP.WebP" alt="" /> */}
            {/* <img src="./assets/images/logo/National Affiliation/UNY.WebP" alt="" /> */}
            {/* <img src="./assets/images/logo/National Affiliation/UP.png" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/UUP.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/VOKASI UNDIP.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/WARMADEWA.png" alt="" />
            <img src="./assets/images/logo/National Affiliation/YPBI.png" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/its.WebP" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default NationalAffiliation;
