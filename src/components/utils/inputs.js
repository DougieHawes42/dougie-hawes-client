import "./style.scss";

export const Input1 = ({ label, type = "text", value, onChange }) => (
  <div className="input-container">
    <label className="input-label">{label}</label>
    <input className="input" type={type} value={value} onChange={onChange} />
  </div>
);
