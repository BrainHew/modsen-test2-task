import React from 'react';

interface SelectProps {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

const SelectForm: React.FC<SelectProps> = (props) => {
  const { label, value, options, onChange } = props;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className='top-0 right-0 flex flex-col md:flex-row items-center mb-3 mt-3 md:ml-3'>
      <span className='text-white mr-3 mb-3 md:mb-0 opacity-90'>{label}:</span>
      <div className='relative w-full md:w-[200px]'>
        <select className='border rounded-md py2 px-4 w-full opacity-90  mr-2 md:mr-0 h-[37px]' value={value} onChange={handleChange}>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectForm;