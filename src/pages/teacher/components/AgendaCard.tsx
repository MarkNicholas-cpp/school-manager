import { useMemo } from "react";

const COLORS = [
  "var(--color-light-cyan)",
  "var(--color-light-purple)",
  "var(--color-yellow)",
];

const AgendaCard = ({ heading, timeString, task }: { heading: string, timeString: string, task: string }) => {
  const borderColor = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
  }, []);

  return (
    <div
      className="rounded-xl shadow p-3 border-t-3 mb-4"
      style={{ borderTopColor: borderColor }}
    >
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <p className="font-bold text-caption text-[var(--color-grey)]">{heading}</p>
          <p className="font-extralight text-caption text-[var(--color-grey)]">{timeString}</p>
        </div>
        <div>{task}</div>
      </div>
    </div>
  );
};

export default AgendaCard;
