import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface MentorshipCalendarProps {
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

export default function MentorshipCalendar({ selectedDate, onSelectDate }: MentorshipCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-3 sm:p-5 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <button type="button" onClick={handlePrevMonth} className="p-1 hover:bg-gray-50 rounded">
          <ChevronLeft size={20} className="text-gray-600" />
        </button>
        <span className="font-medium text-gray-900 text-[15px]">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </span>
        <button type="button" onClick={handleNextMonth} className="p-1 hover:bg-gray-50 rounded">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-4">
        {days.map((day) => (
          <div key={day} className="text-center text-[10px] font-medium text-gray-400 tracking-wider">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 sm:gap-2">
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="aspect-square"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), index + 1);
          const isSelected =
            selectedDate?.getDate() === date.getDate() &&
            selectedDate?.getMonth() === date.getMonth() &&
            selectedDate?.getFullYear() === date.getFullYear();
          const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

          return (
            <button
              type="button"
              key={index}
              disabled={isPast}
              onClick={() => onSelectDate(date)}
              className={`
                aspect-square flex items-center justify-center text-sm rounded-full transition-colors
                ${isPast ? "text-gray-300 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"}
                ${isSelected ? "bg-navy text-white hover:bg-navy-dark" : ""}
              `}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}
