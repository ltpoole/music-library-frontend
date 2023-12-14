import "./TextField.css";

const TextField = ({ label, value, onChange, type = "text" }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextField;
