import { useParams } from "react-router";
import { useDataContext } from "../../context/DataContextProvider";
import "./EventDetails.css";
export default function EventDetails() {
  const { id } = useParams();
  const {
    state: { meets },
  } = useDataContext();

  const event = meets.find(({ id: ID }) => ID === id);

  if (!event) {
    return <h2>You visited a wrong url!</h2>;
  }

  return (
    <div className="event-details-page">
      <div className="main-info">
        <h1>{event?.title}</h1>
        <span>
          <b>Hosted by</b>-{event?.hostedBy}
        </span>
        <img src={event?.eventThumbnail} alt={event?.title} />

        <h2>Details:</h2>
        <p>{event?.eventDescription}</p>
        <h2>Additional Information:</h2>
        <span>
          <b>Dress Code: </b>
          {event?.additionalInformation.dressCode}
        </span>
        <span>
          <b>Age Restriction: </b>
          {event?.additionalInformation.ageRestrictions}
        </span>
        <h2>Event Tags:</h2>
        <div className="tags">
          {event?.eventTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <aside>
        <div className="event-aside-info">
          <div>
            <span>
              <b>Star at:</b> {event?.eventStartTime}
            </span>
            <span>
              <b>End at:</b> {event?.eventEndTime}
            </span>
          </div>
          <div>
            <span>
              <b>Location: </b> {event?.location}
            </span>
            <span>
              <b>Address:</b> {event?.address}
            </span>
          </div>
          {event?.isPaid && (
            <span>
              <b>Price:</b> ₹ {event?.price}
            </span>
          )}
        </div>
        <div className="speakers">
          <h2>Speakers: ({event?.speakers.length})</h2>
          <div>
            {event?.speakers.map(({ name, image, designation }) => (
              <div key={name} className="speaker">
                <img src={image} alt={name} />
                <h3>{name}</h3>
                <span>{designation}</span>
              </div>
            ))}
          </div>
        </div>
        <button>RSVP</button>
      </aside>
    </div>
  );
}
