import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./EventDetails.module.css";
import { EVENTS } from "../StandupComedy/DUMMY_DATA";
import Card from "../../../shared/UI/Card";
import Button from "../../../shared/FormElements/Button";

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const eventId = location.pathname.split("/").pop();
    const selectedEvent = EVENTS.find(
      (event) => event.id === parseInt(eventId)
    );
    setEvent(selectedEvent);
  }, [location.pathname]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.title}>
        <h2>{event.title}</h2>

        <span className={styles.date}>{event.date}</span>
        <span>{event.location}</span>
      </div>
      <div className={`${styles["event-item"]}`}>
        <div className={styles["img-container"]}>
          <img
            src={
              event.image
                ? event.image
                : "https://img.freepik.com/free-photo/paper-texture_1194-6010.jpg"
            }
            alt="event"
          />
        </div>
        <div className={styles.desc}>
          <div className={styles.about}>
            <h2>About</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>{event.text}</p>
          </div>
          <div className={styles.tickets}>
            <div className={styles.flex}>
              <h2>Tickets</h2>
              <h2 className={styles.price}>
                $
                {event.price !== undefined && event.price !== null
                  ? event.price.toFixed(2)
                  : ""}{" "}
                USD
              </h2>
            </div>
            <div className={styles.flex}>
              <input
                value={quantity}
                min="1"
                max="10"
                className={styles["tickets-number"]}
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <Button className={styles.btn}>Add to cart</Button>
            </div>
          </div>
        </div>
      </div>
      <h2>Related Acts</h2>
      <div className={`${styles["event-item"]}`}>
        {EVENTS.slice(0, 2).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            title={card.title}
            text={card.text}
            date={card.date}
            location={card.location}
            className={styles["limited-rows"]}
          />
        ))}
      </div>
    </>
  );
};

export default EventDetails;
