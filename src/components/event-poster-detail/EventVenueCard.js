import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMinus,
  faPlus,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const EventVenueCard = ({
  event,
  showContent,
  toggleContent,
}) => {
  return (
    <div className="event-venue-card mt-4">
      <div
        className="card-header"
        onClick={toggleContent}
        style={{ cursor: 'pointer' }}
      >
        <h5 className="mb-0">
          <FontAwesomeIcon
            icon={showContent ? faMinus : faPlus}
            className="me-2"
          />
          Venue
        </h5>
      </div>
      {showContent && (
        <div className="card-body">
          {event.LinkGmapsEmbed ? (
            <div>
              <div className="row align-items-center mb-3">
                <div className="col-md-4">
                  <img
                    src={event.ImageVeneu}
                    alt="venue"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-md-8">
                  <a
                    className="fw-bolder text-decoration-none"
                    href={event.LinkGmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="me-2"
                    />
                    {event.NameLocation}
                  </a>
                </div>
              </div>
              <div
                  className="map-responsive"
                  dangerouslySetInnerHTML={{ __html: event.LinkGmapsEmbed }}
                ></div>
            </div>
          ) : (
            <p>This is an online event. No physical venue.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default EventVenueCard;
