import { CheckIcon } from "@heroicons/react/24/outline";

export default function PlanCard() {
  return (
    <div className="border rounded p-3 h-[350px] w-full pointer mr-3 bg-black text-white">
      <div className="rounded bg-gradient-to-r from-red-500 to-red-700 w-full p-3 font-bold">
        <h3 className="text-2xl">Basic</h3>
      </div>
      <div className="border-b border-gray-700 py-4 flex items-center">
        <div className="w-6 h-6 rounded-full text-sm bg-red-500 flex items-center justify-center">
          <CheckIcon color="white" width={15} fontWeight={900} />
        </div>
        <div className="ml-3">
          <h3 className="text-gray-400">Monthly price</h3>
          <h3 className="font-semibold">$5.00</h3>
        </div>
      </div>
      <div className="border-b border-gray-700 py-4 flex items-center">
        <div className="w-6 h-6 rounded-full text-sm bg-red-500 flex items-center justify-center">
          <CheckIcon color="white" width={15} fontWeight={900} />
        </div>
        <div className="ml-3">
          <h3 className="text-gray-400">Downloads</h3>
          <h3 className="font-semibold">Included</h3>
        </div>
      </div>
    </div>
  );
}
