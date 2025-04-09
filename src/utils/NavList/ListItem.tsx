import { NavLink } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useRef } from "react";

interface ListItemProps {
  icon: string; // SVG file path
  text: string;
  link?: string;
  onClick?: () => void;
}

const ListItem = ({ icon, link, text, onClick }: ListItemProps) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  const updateStroke = (color: string) => {
    if (!svgRef.current) return;
    svgRef.current.querySelectorAll("path").forEach((path) => {
      path.setAttribute("stroke", color);
    });
  };

  const renderContent = (isActive: boolean) => (
    <div
      className="flex gap-3 px-4 py-2 text-sm rounded-[10px] w-full"
      onMouseEnter={() =>
        !isActive && updateStroke("var(--color-black)") // hover
      }
      onMouseLeave={() =>
        !isActive && updateStroke("var(--color-grey)") // reset on leave
      }
    >
      <div className="w-5 aspect-square">
        <ReactSVG
          src={icon}
          beforeInjection={(svg) => {
            svg.setAttribute("class", "w-full h-full");
            svgRef.current = svg as unknown as SVGSVGElement;
            svg.querySelectorAll("path").forEach((path) => {
              path.setAttribute(
                "stroke",
                isActive ? "var(--color-black)" : "var(--color-grey)"
              );
            });
          }}
        />
      </div>
      <p>{text}</p>
    </div>
  );

  if (link) {
    return (
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? "text-[var(--color-black)] bg-[var(--color-light-cyan)] rounded-[10px] transition-all ease-in"
            : "text-grey hover:bg-[var(--color-light-grey)] rounded-[10px] hover:text-[var(--color-dark)] transition-all ease-out"
        }
        end
      >
        {({ isActive }) => renderContent(isActive)}
      </NavLink>
    );
  }

  return (
    <button
      onClick={onClick}
      className="text-grey hover:bg-[var(--color-light-grey)] w-full rounded-[10px] hover:text-[var(--color-dark)] cursor-pointer  transition-all ease-out"
    >
      {renderContent(false)}
    </button>
  );
};

export default ListItem;
