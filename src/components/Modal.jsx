import { useState } from "react";
import { CircleCheckBig, X } from "lucide-react";

function Modal({ modelOpen, setmodelOpen }) {
  const [selectedJob, setSelectedJob] = useState("");

  return (
    <>
      {modelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-ful">
          <div className="relative p-4 w-[96] md:w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-lg shadow-md dark:bg-gray-700">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600 border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Thursday 30 2025
              </h3>
              <button onClick={() => setmodelOpen(false)}>
                <X size={24} className="text-gray-600 font-medium bg-gray-300 p-1 rounded-full hover:bg-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-3">
              <ul className="space-y-4 mb-4">
                {[
                  {
                    id: "job-1",
                    title: "Meeting with Carl Pie",
                    time: "8:30 - 10:45",
                    bg: "bg-[rgb(245,237,255)]",
                    text: "text-[rgb(175,113,255)]",
                    image:
                      "https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg",
                  },
                  {
                    id: "job-2",
                    title: "Setup client demo",
                    time: "8:30 - 10:45",
                    bg: "bg-[rgb(232,247,240)]",
                    text: "text-[rgb(65,188,132)]",
                  },
                  {
                    id: "job-3",
                    title: "Sign Client contract",
                    time: "8:30 - 10:45",
                    bg: "bg-[rgb(232,247,240)]",
                    text: "text-[rgb(65,188,132)]",
                  },
                ].map((job) => (
                  <li key={job.id}>
                    <input
                      type="radio"
                      id={job.id}
                      name="job"
                      value={job.id}
                      className="hidden peer"
                      onChange={() => setSelectedJob(job.id)}
                      checked={selectedJob === job.id}
                    />
                    <label
                      htmlFor={job.id}
                      className={`flex items-center justify-between w-full p-4 sm:p-5 ${job.text} ${job.bg} border border-gray-200 rounded-lg cursor-pointer transition hover:shadow-md`}
                    >
                      <div className="flex gap-3 items-center">
                        {job.image ? (
                          <img
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                            src={job.image}
                            alt="Profile"
                          />
                        ) : (
                          <CircleCheckBig size={24} className="text-green-500" />
                        )}
                        <div>
                          <div className="text-base sm:text-lg">{job.title}</div>
                          <div className={`text-sm ${job.text}`}>{job.time}</div>
                        </div>
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
