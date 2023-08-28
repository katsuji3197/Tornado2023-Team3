import PropTypes from "prop-types";

const RadioButtonGroup = ({
  options,
  selectedValue,
  onChange,
  name,
  className,
}) => {
  return (
    <div className={className}>
      {options.map((option, index) => (
        <label
          key={index}
          className={`inline-flex items-center ${index !== 0 ? "ml-4" : ""}`}
        >
          <input
            type="radio"
            name={name}
            className="form-radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
          />
          <span className="ml-2 text-gray-900">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

RadioButtonGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default RadioButtonGroup;
