import "../../css/newsletter/newsletterdetail.css"
import DataLetter from "../../data/newsletter/NewsletterData.json";

const Newsletter2023Detail4 = () => {
    return (
        <section className='hero-iframe'>
            <div className="container">
                {DataLetter.NewsletterApril2023.map((Letter1) => {
                    return (
                        <div className="">
                            <div className="kotak row text-center col-12 mx-auto" key={Letter1.id}>
                                <div className='pag col-lg-4 col-12'>
                                    <img src={Letter1.images} alt='Footer Logo' className='mt-5'></img>
                                    <h2 className='mt-3 text-lg-start'>{Letter1.title}</h2>
                                </div>
                                <div className='if text-center col-lg-8 col-12 mt-5 mb-5'>
                                    <iframe src={Letter1.linkpdf} width="80%" height="570" />

                                </div>
                            </div>

                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Newsletter2023Detail4