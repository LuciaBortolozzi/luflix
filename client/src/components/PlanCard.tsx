import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Plan } from "../hooks/usePlans";

interface PlanProps {
  setSelectedSession: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSession: string | null;
  plan: Plan;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function PlanCard({
  plan,
  setSelectedSession,
  selectedSession,
}: Readonly<PlanProps>) {
  const { name, price, canViewHD, canDownload } = plan;

  return (
    <button
      className={`border rounded p-3 h-[350px] w-full pointer mr-3 cursor-pointer ${
        selectedSession === plan.price.id ? "border-3 border-black" : ""
      }`}
      onClick={() => setSelectedSession(plan.price.id)}
    >
      <div className="rounded bg-gradient-to-r from-red-500 to-red-500 w-full p-3 text-white font-bold text-center">
        <h3 className="text-2xl">{name}</h3>
        <p className="font-light">{formatter.format(price.amount / 100)}</p>
      </div>

      <div className="border-b py-4 flex items-center">
        <div className="w-6 h-6 rounded-full text-sm bg-green-500 flex items-center justify-center">
          <CheckIcon color="white" width={15} fontWeight={900} />
        </div>
        <div className="ml-3 flex-1 text-center">
          <h3 className="text-gray-600">Monthly price</h3>
          <h3 className="font-semibold">
            {formatter.format(price.amount / 100)}
          </h3>
        </div>
      </div>

      <div className="border-b py-4 flex items-center">
        {canViewHD ? (
          <div className="w-6 h-6 rounded-full text-sm bg-green-500 flex items-center justify-center">
            <CheckIcon color="white" width={15} fontWeight={900} />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full text-sm bg-red-500 flex items-center justify-center">
            <XMarkIcon color="white" width={15} fontWeight={900} />
          </div>
        )}
        <div className="ml-3 flex-1 text-center">
          <h3 className="text-gray-600">HD</h3>
          <h3 className="font-semibold">Included</h3>
        </div>
      </div>

      <div className="border-b py-4 flex items-center">
        {canDownload ? (
          <div className="w-6 h-6 rounded-full text-sm bg-green-500 flex items-center justify-center">
            <CheckIcon color="white" width={15} fontWeight={900} />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full text-sm bg-red-500 flex items-center justify-center">
            <XMarkIcon color="white" width={15} fontWeight={900} />
          </div>
        )}
        <div className="ml-3 flex-1 text-center">
          <h3 className="text-gray-600">Downloads</h3>
          <h3 className="font-semibold">Included</h3>
        </div>
      </div>
    </button>
  );
}
