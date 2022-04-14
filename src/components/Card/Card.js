import s from "./Card.module.scss";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import PinDropIcon from "@mui/icons-material/PinDrop";

function Card({ eventData }) {
  return (
    <div className={s.container}>
      {eventData.map((event) => (
        <div className={s.card}>
          <img className={s.image} src={`${event.imageurl}`} />
          <h4 className={s.name}>{event.eventname}</h4>
          <h4 className={s.description}>{event.description}</h4>
          <div className={s.townContainer}>
            <CalendarMonthTwoToneIcon />
            <h4 className={s.town}>{event.venue.town}</h4>
          </div>
          <div className={s.dateContainer}>
            <PinDropIcon />
            <h4 className={s.date}>{event.date}</h4>
          </div>
          <button className={s.button}>view details</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
