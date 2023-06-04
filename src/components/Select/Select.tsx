import styles from './select.module.scss';

interface SelectType {
  options: { value: string; text: string }[];
  disabled: boolean;
  onChange: (value: any) => void;
  defaultValue: string;
}

const Select: React.FC<SelectType> = ({ options, disabled, onChange, defaultValue }) => {
  return (
    <select
      name=''
      id=''
      defaultValue={defaultValue}
      className={styles.select}
      disabled={disabled}
      onChange={onChange}
    >
      {options.map((opt) => (
        <option key={`selector-${opt.value}`} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
