export const ExperienceCard = () => {
  return (
    <div className="bg-black text-white p-6 rounded-xl border border-gray-700 w-full sm:w-1/2">
      <h2 className="text-xl font-semibold mb-4">Experience</h2>
      <div className="text-5xl font-bold mb-6">03</div>

      <div className="flex justify-between items-center gap-4 mb-6">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <img
              src="/vertx.PNG"
              alt="Company 1"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="font-medium">Company 1</div>
        </div>
        <button className="text-xs text-white/70 hover:underline">
          View Profile
        </button>
      </div>

      <div className="flex justify-between items-center gap-4 mb-6">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <img
              src="/vertx.PNG"
              alt="Company 2"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="font-medium">Company 2</div>
        </div>
        <button className="text-xs text-white/70 hover:underline">
          View Profile
        </button>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
            <img
              src="/vertx.PNG"
              alt="Company 3"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="font-medium">Company 3</div>
        </div>
        <button className="text-xs text-white/70 hover:underline">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default ExperienceCard;
