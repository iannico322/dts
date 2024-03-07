import { Input } from "../ui/input";

const InputTemp = ({ placeholder, value, label, span }: any) => {
  return (
    <div className={" w-full flex flex-col gap-1 " + span}>
      <p className=" text-xs">{label}</p>
      <Input placeholder={placeholder} value={value} />
    </div>
  );
};

export default InputTemp;
