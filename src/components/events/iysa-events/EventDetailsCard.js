import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquarePinterest,
} from '@fortawesome/free-brands-svg-icons';

const EventDetailsCard = ({ event }) => (
  <div className="event-details-card">
    <h4 className="card-title">Event Details</h4>
    <hr />
    <p>
      <strong>Date and Time:</strong> {event.DateAdTime}
    </p>
    <p>
      <strong>Registration End Date:</strong> {event.RegistEndDate}
    </p>
    <p>
      <strong>Location:</strong> {event.Location}
    </p>
    <p>
      <strong>Event Types:</strong> {event.EventType}
    </p>
    <p>
      <strong>Event Category:</strong> {event.EventCategory}
    </p>
    <a
      className="btn btn-primary w-100 mb-3"
      href={event.LinkRegist}
      target="_blank"
      rel="noopener noreferrer"
    >
      Click Here to Register
    </a>
    <div className="event-share mt-3">
      <h5>Share With Friends</h5>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`}
        title="Share this page on Facebook"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faSquareFacebook} />
      </a>
      <a
        href={`https://twitter.com/share?url=${encodeURIComponent(
          window.location.href
        )}`}
        title="Share this page on Twitter"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faSquareTwitter} />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          window.location.href
        )}`}
        title="Share this page on Linkedin"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
          window.location.href
        )}`}
        title="Share this page on Pinterest"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faSquarePinterest} />
      </a>
    </div>
  </div>
);

export default EventDetailsCard;
