import '../../css/expert/expert.css'

const ExpertStaff = () => {
    return (
        <section className="expert-team min-vh-100 mb-5">
            <div className="pem container-lg">
                <h1 className='text-center mb-5 row-cols-sm-2'>IYSA Expert Staff</h1>
                <h2></h2>
                <div className="row gy-4 row-cols-1 row-cols-sm-2 row-cols-md-3">
                    <div className="col">
                        <img src="./assets/images/team/1.jpg" className="gallery-item " alt="gallery" />
                        <h5>Saidah S.Kom</h5>
                        <h6>Dosen Universitas Indonesia</h6>
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/2.jpg" className="gallery-item" alt="gallery" />
                        <h5>Saidah S.Kom</h5>
                        <h6>Dosen Universitas Indonesia</h6>
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/3.jpg" className="gallery-item" alt="gallery" />
                        <h5>Saidah S.Kom</h5>
                        <h6>Dosen Universitas Indonesia</h6>
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/4.jpg" className="gallery-item" alt="gallery" />
                        <h5>Saidah S.Kom</h5>
                        <h6>Dosen Universitas Indonesia</h6>
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/5.jpg" className="gallery-item" alt="gallery" />
                        <h5>Saidah S.Kom</h5>
                        <h6>Dosen Universitas Indonesia</h6>
                    </div>
                    <div className="col">
                        <img src="./assets/images/team/6.jpg" className="gallery-item" alt="gallery" />
                        <h5>Saidah S.Kom</h5>
                        <h6>Dosen Universitas Indonesia</h6>
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

export default ExpertStaff