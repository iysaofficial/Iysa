// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import EventWebsiteData from "../../data/eventwebsite/EventWebsite.json";

const Allwebevent = () => {

    
    return(
        <section className='website-event-section mb-5'>
            <div className="container">
                <div className='event-section-header'>
                    <h1 className='text-center mt-5'>IYSA Event Website <div className='underline mt-5'><span></span></div></h1>
                </div>
                <div className='row mx-auto '>
                {EventWebsiteData.EventWebsite.map((website) => {
                    
                  return (
                    <div className='col-md-6 col-lg-4 mt-4'>
                        <div className="box">
                            <div className="content">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faEarthEurope} />
                                    <img></img>
                                </div>
                                <div className="website-event-text">
                                    <a href={website.link} className='text-decoration-none' target='-blank'>
                                    <h3>{website.WebsiteName}</h3>
                                    <p>{website.EventType}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                  );
                })}  
                </div>  
                <br />   
            </div>
        </section>
    )
}

export default Allwebevent;