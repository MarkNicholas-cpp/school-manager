import { ReactSVG } from "react-svg";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectComponentProps {
  name: string;
  id?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: SelectOption[];
}

const SelectComponent = ({
  name,
  id = name,
  value,
  onChange,
  options,
}: SelectComponentProps) => {
  return (
    <div className="relative w-fit bg-[var(--color-light-grey)]/30 px-3 py-1.5 rounded-lg text-caption flex items-center text-[var(--color-grey)]">
      <select
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        className="appearance-none bg-transparent pr-3 outline-none cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {/* Custom down arrow */}
      <span className="absolute right-3 pointer-events-none mt-1">
        <ReactSVG width={10} className="aspect-square" src="/src/assets/down.svg" />
      </span>
    </div>
  );
};

export default SelectComponent;
