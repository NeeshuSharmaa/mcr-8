import EventCard from "../../components/eventCard/EventCard";
import { useDataContext } from "../../context/DataContextProvider";
import "./Landing.css";

export default function Landing() {
  const {
    dispatch,
    state: { meets },
    filterTheMeets,
  } = useDataContext();

  const meetsToDisplay = filterTheMeets(meets);
  return (
    <div className="landing-page">
      <header>
        <h1>Meetup Events</h1>
        <select
          onChange={(e) =>
            dispatch({ type: "EVENT_TYPE", payload: e.target.value })
          }
        >
          <option value="none">Search Event Type</option>
          <option value="offline">Offline</option>
          <option value="online">Online</option>
          <option value="both">Both</option>
        </select>
      </header>
      {meetsToDisplay?.length ? (
        <div className="events-container">
          {meetsToDisplay?.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      ) : (
        <div className="empty-events-container">
          <h3>No Events to Show!</h3>
        </div>
      )}
    </div>
  );
}
