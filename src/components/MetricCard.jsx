import { MdMail, MdPeople, MdCalendarMonth, MdWork } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function MetricCard({ icon, label, value, iconColor = "text-gray-700", bgColor = "bg-gray-200", className }) {
  const Icon = {
    mail: MdMail,
    users: MdPeople,
    calendar: MdCalendarMonth,
    briefcase: MdWork,
  }[icon];

  return (
    <div
      className={`border-none rounded-lg p-6 shadow-md bg-white transition-all duration-300 hover:shadow-[0_4px_10px_rgba(45,212,191,0.4)] ${className}`}
    >
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full ${bgColor}`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          <div className="text-sm text-gray-500">{label}</div>
        </div>
      </div>

      <p className="py-2 text-gray-300"> - - - - - - - - - - - - - - - - - - - - - - - - - - </p>

      <button className="mt-4 flex justify-between w-full text-sm text-gray-500 hover:text-black cursor-pointer">
        <p>View details</p>
        <MdKeyboardArrowRight size={25} />
      </button>
    </div>
  );
}

export default MetricCard;