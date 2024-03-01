import React, { useEffect } from 'react';

const InternationalAffiliation = ()=> {
  useEffect(() => {
    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
  }, []);
  return(
      <section className="affiliation-section">
          <div className="container">
              <h2 className="text-center">International Affiliation</h2>
              <div className="logos">
                <div className="logos-slide">
                  <img src="./assets/images/logo/International Affiliation/africa.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/asia.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/asti.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ayrid.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/azs.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/barrc.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/buca.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/burung.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/cpc.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/diece.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/esi.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/fdct.WebP" alt="" />
                  {/* <img src="./assets/images/logo/International Affiliation/fna.WebP" alt="" /> */}
                  <img src="./assets/images/logo/International Affiliation/gysc.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/hkfi.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/UMP.WebP" alt="" />
                  
                  <img src="./assets/images/logo/International Affiliation/iarc.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ibix.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/idea.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ifest.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/ifia.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/img.WebP" alt="" />
                  {/* <img src="./assets/images/logo/International Affiliation/isb.WebP" alt="" /> */}
                  {/* <img src="./assets/images/logo/International Affiliation/jgu.WebP" alt="" /> */}
                  <img src="./assets/images/logo/International Affiliation/kiif.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/klesf.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/pmr.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/pohon.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/poshs.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/red g.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/red.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/solacyt.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/spartakus.WebP" alt="" />
                  <img src="./assets/images/logo/International Affiliation/usm.WebP" alt="" />   
                </div>
              </div>
          </div>
          <br></br>
          <br></br>
          <br></br>
      </section>


  )
}
export default InternationalAffiliation;