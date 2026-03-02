import "./Event.css";

const Event = (props) => {
  return (
    <div className={"Event " + props.color}>
      <div className="card">
        <h4>{props.event}</h4>
        <h5>{props.location}</h5>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Event;
