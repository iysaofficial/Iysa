import About from '../../components/home/About';
import VisionMission from '../../components/home/Vision-Mission';
import Curation from '../../components/home/Curation';
import Event from '../../components/home/Event';
// import EventAffiliation from '../../components/home/Event-Affiliation';
import NationalAffiliation from '../../components/home/National-affiliation';
import InternationalAffiliation from '../../components/home/International-affiliation';
import MediaPartner from '../../components/home/Media-Partner';
import WebsiteEvent from '../../components/home/WebsiteEvent';
import Newsletter from '../../components/home/Newsletter';
import '../../css/home/home.css';
import "../../css/event/eventPosterLanding.css"

function Landing() {
    
    return (  
      <div>
        <About></About>
        <VisionMission></VisionMission>
        <Curation></Curation>
        <Event></Event>
        {/* <EventAffiliation></EventAffiliation> */}
        <NationalAffiliation></NationalAffiliation>
        <InternationalAffiliation></InternationalAffiliation>
        <MediaPartner></MediaPartner>
        <WebsiteEvent></WebsiteEvent>
        <Newsletter></Newsletter>
      </div>
    );
  }
  
  export default Landing;
  