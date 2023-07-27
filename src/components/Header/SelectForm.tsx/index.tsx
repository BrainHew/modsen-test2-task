import React from "react";

interface SelectProps {
  label: string;
  // eslint-disable-next-line no-unused-vars
  value: string;
  // eslint-disable-next-line no-unused-vars
  options: { value: string; label: string }[];
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

const SelectForm: React.FC<SelectProps> = ({
  label,
  value,
  options,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="right-0 top-0 mb-3 mt-3 flex flex-col items-center md:ml-3 md:flex-row">
      <span className="mb-3 mr-3 text-white opacity-90 md:mb-0">{label}:</span>
      <div className="relative w-full md:w-[200px]">
        <select
          className="py2 mr-2 h-[37px] w-full rounded-md border  px-4 opacity-90 md:mr-0"
          value={value}
          onChange={handleChange}
        >
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectForm;
