import "./style.scss";

export const Input1 = ({ label, type = "text", name, value, onChange }) => (
  <div className="input-container">
    <label className="input-label">{label}</label>
    <input
      className="input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export const Input2 = ({ label, name, value, onChange }) => (
  <div className="input-container">
    <label className="input-label">{label}</label>
    <textarea className="input" name={name} value={value} onChange={onChange} />
  </div>
);
