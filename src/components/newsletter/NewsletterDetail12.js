import "../../css/newsletter/newsletterdetail.css"
import DataLetter from "../../data/newsletter/NewsletterData.json";
import useNewsletterTracker from "../../hooks/useNewsletterTracker";

const NewsletterDetail12 = () => {
    const dataItems = DataLetter.NewsletterDecember2022;
    const newsletterTitle = dataItems && dataItems.length > 0 ? dataItems[0].title : "NewsletterDetail12";
    const { viewCount, lastViewed } = useNewsletterTracker("/NewsletterDetailPage12", newsletterTitle);

    return (
        <section className='hero-iframe'>
            <div className="container">
                {dataItems.map((Letter1) => {
                    return (
                        <div className="" key={Letter1.id}>
                            <div className="kotak row text-center col-12 mx-auto">
                                <div className='pag col-lg-4 col-12'>
                                    <img src={Letter1.images} alt='Newsletter Cover' className='mt-5'></img>
                                    <h2 className='mt-3 text-lg-start'>{Letter1.title}</h2>
                                    {/* View Tracking Info */}
                                    <div className="newsletter-detail-view-info mt-2">
                                        <div className="view-stat">
                                            {String.fromCodePoint(0x1F441)} {viewCount}x dilihat
                                        </div>
                                        {lastViewed && (
                                            <div className="view-stat">
                                                {String.fromCodePoint(0x1F552)} {lastViewed}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className='if text-center col-lg-8 col-12 mt-5 mb-5'>
                                    <iframe src={Letter1.linkpdf} width="80%" height="570" title={Letter1.title} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default NewsletterDetail12;
