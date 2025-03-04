import '../../css/expert/expert.css'
// import React, { useEffect } from 'react';
// import bootstrap from 'bootstrap';

const ExpertTeam = () => {
    // useEffect(() => {
    //     const handleClick = (e) => {
    //         if (e.target.classList.contains('gallery-item')) {
    //             const src = e.target.getAttribute('src');
    //             document.querySelector('.modal-img').src = src;
    //             const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
    //             myModal.show();
    //         }
    //     };

    //     document.addEventListener('click', handleClick);

    //     return () => {
    //         document.removeEventListener('click', handleClick);
    //     };
    // }, []);

    return (
        <section className="expert-team min-vh-100 mb-5">
            <div className="pem container-lg">
                <h1 className='text-center row-cols-sm-2'>IYSA Expert Team</h1>
                <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/1.png" className="gallery-item " alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/2.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/3.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/4.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/5.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/6.png" className="gallery-item" alt="gallery" />
                    </div>
                    {/* <div className="col">
                        <img src="./assets/images/team/NewDesign/7.png" className="gallery-item" alt="gallery" />
                    </div> */}
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/8.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/9.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/10.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/11.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/12.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/13.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/14.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/15.png" className="gallery-item" alt="gallery" />
                    </div>
                    {/* <div className="col">
                        <img src="./assets/images/team/NewDesign/16.png" className="gallery-item" alt="gallery" />
                    </div> */}
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/17.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/18.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/19.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/20.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/21.png" className="gallery-item" alt="gallery" />
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/NewDesign/24.png" className="gallery-item" alt="gallery" />
                    </div>
                </div>
            </div>

            <div className="modal fade" id="gallery-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img src="./assets/images/logo/8.jpg" className="modal-img" alt="modal img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertTeam