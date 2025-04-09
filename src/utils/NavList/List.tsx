import { ReactElement } from "react";
import ListItem from "./ListItem";

const List = ({ children,heading }: { heading:string, children: ReactElement<typeof ListItem>[] }) => {
    return <div className="p-4">
        <p className="text-caption-medium uppercase text-[var(--color-light-grey)] mb-2.5 px-4">{heading}</p>
        <div className="flex flex-col gap-2">
            {children}
        </div>
    </div>
}
export default List;