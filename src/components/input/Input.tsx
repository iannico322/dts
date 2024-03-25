import { Input } from "../ui/input";

const InputTemp = ({ placeholder, value, label,name, span, type,onChange }: any) => {
  return (
    <div className={" w-full flex flex-col gap-1 " + span}>
      <p className=" text-xs">{label}</p>
      <Input placeholder={placeholder} name={name} onChange={onChange} type={type} value={value} required />
    </div>
  );
};

export default InputTemp;
