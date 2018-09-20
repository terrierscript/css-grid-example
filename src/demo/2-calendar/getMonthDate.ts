import { DateTime } from "luxon";
export const getMonthDate = (year, month) => {
  const firstDay = DateTime.local(year, month, 1);
  return Array.from({ length: firstDay.daysInMonth }, (_, day) => {
    const currDay = firstDay.plus({ days: day });
    return currDay;
  });
};

const generateCalendarMap = (year, month, startWeekday = 7) => {
  const days = getMonthDate(year, month);
  return days.reduce((curr: any[][], day, i) => {
    if (day.weekday % startWeekday === 0 || i === 0) {
      return [...curr, [day]];
    }
    const newItem = [...curr.slice(-1)[0], day];
    return [...curr.slice(0, -1), newItem];
  }, []);
};

export const generateFilledCalendar = (year: any, month: any) => {
  const calendar = generateCalendarMap(year, month);
  const filled = calendar.map((item, i, arr) => {
    if (i === 0) {
      // first
      return [...Array.from({ length: 7 - item.length }), ...item];
    }
    if (i === arr.length - 1) {
      // last
      return [...item, ...Array.from({ length: 7 - item.length })];
    }
    return item;
  });
  return filled;
};
