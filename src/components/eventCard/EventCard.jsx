import "./EventCard.css";
export default function EventCard({
  id,
  title,
  eventStartTime,
  eventThumbnail,
  eventType,
}) {
  return (
    <div className="event-card">
      <div className="img-div">
        <img src={eventThumbnail} alt={title} />
      </div>
      <small>{eventStartTime}</small>
      <h3>{title}</h3>
      <span className="event-type-tag">{eventType}</span>
    </div>
  );
}
