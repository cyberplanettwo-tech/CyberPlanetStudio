import InputField from "@/components/InputField";
export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex justify-center items-center p-10">
      <div className="w-full max-w-lg rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="text-3xl font-bold">
          Cyber Planet Studio
        </h1>

        <p className="mt-2 text-slate-400">
          Generate New Episode
        </p>
<InputField
  label="Episode Number"
  placeholder="102"
/>

<InputField
  label="Topic"
  placeholder="Camera Angle"
/>


</div>
 </main>
  );
}