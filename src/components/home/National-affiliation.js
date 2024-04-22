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
            {/* <img src="./assets/images/logo/National Affiliation/unikom.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/UP.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/UST.WebP" alt="" />
            <img src="./assets/images/logo/National Affiliation/USY.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/UU.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/UTS.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/ck.WebP" alt="" /> */}
            <img src="./assets/images/logo/National Affiliation/isb.WebP" alt="" />
            {/* <img src="./assets/images/logo/National Affiliation/jgu.WebP" alt="" /> */}
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default NationalAffiliation;
