import styles from './select.module.scss';

interface SelectType {
  options: { value: string; text: string; selected: boolean }[];
  disabled: boolean;
  onChange: (value: any) => void;
}

const Select: React.FC<SelectType> = ({ options, disabled, onChange }) => {
  return (
    <select name='' id='' className={styles.select} disabled={disabled} onChange={onChange}>
      {options.map((opt) => (
        <option key={`selector-${opt.value}`} value={opt.value} selected={opt.selected}>
          {opt.text}
        </option>
      ))}
    </select>
  );
};

export default Select;
