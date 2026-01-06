import AllEventPoster from "../../components/event-poster-detail/AllEventPoster";
import "../../css/event/allEventPosterPage.css"
function AllEventPage() {
    return (  
      <div>
        <AllEventPoster maxItems={6} />
      </div>
    );
  }
  
export default AllEventPage;
  