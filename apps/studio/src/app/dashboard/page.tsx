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
<div className="mt-6">
  <label className="block mb-2 text-sm font-medium">
    Episode Number
  </label>

  <input
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder-gray-700"
    placeholder="102"
  />
</div>

<div className="mt-6">
  <label className="block mb-2 text-sm font-medium">
    Topic
  </label>

  <input
    className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white placeholder-gray-700"
    placeholder="Camera Angle"
  />
</div>


      </div>
    </main>
  );
}