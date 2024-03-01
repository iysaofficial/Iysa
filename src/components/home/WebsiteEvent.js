// Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons'
import EventWebsiteData from "../../data/eventwebsite/EventWebsite.json";

const WebsiteEvent = () => {

    
    return(
        <section className='website-event-section'>
            <div className="container">
                <div className='event-section-header'>
                    <h1 className='text-center'>IYSA Event Website <div className='underline'><span></span></div></h1>
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
            </div>
        </section>
    )
}

export default WebsiteEvent;