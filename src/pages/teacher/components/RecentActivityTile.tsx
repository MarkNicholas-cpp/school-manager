import { ReactSVG } from "react-svg";

type RecentActivityTileProps = {
  title: string;
  description: string;
  time: string;
};

const RecentActivityTile = ({
  title,
  description,
  time,
}: RecentActivityTileProps) => {
  return (
    <div className="flex gap-3">
      <div className="bg-[var(--color-light-cyan)]/50 h-8 w-8 rounded-full flex items-center justify-center self-baseline">
        <ReactSVG
          src="/src/assets/notification-dark.svg"
          beforeInjection={(svg) => {
            const paths = svg.querySelectorAll("path");
            paths.forEach((path) => {
              path.setAttribute("stroke", "#2563eb");
              path.setAttribute("fill", "#2563eb");
            });
          }}
        />
      </div>
      <div className="px-2 w-[85%]">
        <div className="paragraph-md font-semibold mb-1">{title}</div>
        <p className="text-caption-small text-[var(--color-grey)]">{description}</p>
        <p className="text-caption-small text-end text-[var(--color-grey)]">{time}</p>
      </div>
    </div>
  );
};

export default RecentActivityTile;
