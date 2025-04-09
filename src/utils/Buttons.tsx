import { ReactSVG } from "react-svg"

interface NavButtonProps {
    icon: string,
    onClick?: () => void
}

export const NavButton = ({ icon, onClick }: NavButtonProps) => {
    return <button className="rounded-full flex items-center justify-center bg-white w-[40px] aspect-square cursor-pointer" onClick={onClick}>
        {<ReactSVG src={icon} />}
    </button>
}
