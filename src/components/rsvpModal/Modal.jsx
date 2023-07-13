export default function Modal() {
  return (
    <div className="modal-outer">
      <div className="modal-for-oustide-click"></div>
      <div className="modal-main">
        <h2>Complete your RSVP</h2>
        <p>Fill in your personal information</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <p>*You have to make the payment at the venue.</p>
        <button>RSVP</button>
      </div>
    </div>
  );
}
