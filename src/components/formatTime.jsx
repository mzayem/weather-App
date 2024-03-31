export default function FormatTime(dateTimeString) {
  const date = new Date(dateTimeString);
  const hours = date.getHours() % 12 || 12; // Convert hours to 12-hour format
  const minutes = date.getMinutes();
  const amOrPm = date.getHours() >= 12 ? "pm" : "am"; // Determine am/pm

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const isToday = date.getDate() === today.getDate();
  const isTomorrow = date.getDate() === tomorrow.getDate();

  let dayString = "";
  if (isToday) {
    dayString = "Today";
  } else if (isTomorrow) {
    dayString = "Tomorrow";
  } else {
    // Format for other days if needed
    const options = { weekday: "long" };
    dayString = new Intl.DateTimeFormat("en-US", options).format(date);
  }

  return (
    <>
      <span>
        {dayString}
        <br />
      </span>
      {hours}:{minutes < 10 ? "0" : ""}
      {minutes} {amOrPm}
    </>
  );
}
