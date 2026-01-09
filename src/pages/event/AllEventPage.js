import AllEventPoster from "../../components/event-poster-detail/AllEventPoster";
import "../../css/event/allEventPosterPage.css"
function AllEventPage() {
    return (  
      <div>
        <AllEventPoster maxItems={8} />
      </div>
    );
  }
  
export default AllEventPage;
  