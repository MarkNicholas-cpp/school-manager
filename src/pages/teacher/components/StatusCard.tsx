type StatusCardProps = {
    mode: "inc" | "dec";
    heading: string;
    value: number;
    changeInPresentage: number;
    prefix?: string; // optional, e.g., '$'
  };
  
  const StatusCard = ({
    mode,
    heading,
    value,
    changeInPresentage,
    prefix = "",
  }: StatusCardProps) => {
    const isIncrease = mode === "inc";
  
    return (
      <div className="grow flex flex-col gap-2 rounded-xl bg-white p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <p className="text-caption text-[var(--color-grey)]">{heading}</p>
          <span
            className={
              "text-[10px] rounded-full px-2 py-[2px] font-semibold flex items-center gap-1 " +
              (isIncrease
                ? "bg-[var(--color-success)]/5 text-[var(--color-success)]"
                : "bg-[var(--color-danger)]/5 text-[var(--color-danger)]")
            }
          >
            <span className="text-xs mb-[3px]">
              {isIncrease ? "↑" : "↓"}
            </span>
            <span>{changeInPresentage}%</span>
          </span>
        </div>
  
        <p className="text-xl sm:text-2xl font-semibold">
          {prefix}{value.toLocaleString()}
        </p>
      </div>
    );
  };
  
  export default StatusCard;
  