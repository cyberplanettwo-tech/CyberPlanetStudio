type InputFieldProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function InputField({
  label,
  placeholder,
  value,
  onChange,
}: InputFieldProps) {
  return (
    <div className="mt-6">
      <label className="mb-2 block text-sm font-medium">
        {label}
      </label>

      <input
  className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder:text-slate-500"
  placeholder={placeholder}
  value={value}
  onChange={(event) => {
    console.log("Input changed:", label, event.target.value);
    onChange(event.target.value);
  }}
/>
    </div>
  );
}