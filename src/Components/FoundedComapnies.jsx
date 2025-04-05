export const FoundedCompaniesCard = () => {
  return (
    <div className="bg-black text-white p-6 rounded-xl border border-gray-700 w-full sm:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Founded Companies</h2>
      <div className="text-5xl font-bold mb-6">02</div>

      <div className="flex justify-between items-start gap-4 mb-6">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <img
              src="/vertx.PNG"
              alt="Vertx"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 font-medium text-white">
              Vertx
              <span className="text-[10px] font-semibold px-2 py-[2px] rounded bg-green-600">
                CEO
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Founded in 2025. in{" "}
              <span className="font-semibold text-white">Fintech</span>.
            </p>
          </div>
        </div>
        <button className="text-xs text-white/70 hover:underline">
          View Profile
        </button>
      </div>

      <div className="flex justify-between items-start gap-4">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <img
              src="/vertx.PNG"
              alt="Company"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 font-medium text-white">
              Company
              <span className="text-[10px] font-semibold px-2 py-[2px] rounded bg-indigo-500">
                PROPRIETOR
              </span>
            </div>
            <p className="text-gray-400 text-xs mt-1">
              Details/Information
              <br />
              like acquired /exit/m&a
            </p>
          </div>
        </div>
        <button className="text-xs text-white/70 hover:underline">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default FoundedCompaniesCard;
