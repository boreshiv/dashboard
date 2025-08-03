
import type { IGridLayoutTitleProps } from "./gridLayoutTitle.type.ts";
import { GripVertical } from "lucide-react";


const GridLayoutTitle = (props: IGridLayoutTitleProps) => {
    return (
        <div className="drag-handle dashboard-tile-label" style={{ fontWeight: "bold", cursor: "move", ...props.style }}>
            {props.children}
            <GripVertical size={20} style={{ marginLeft: 10, color: '#64748b' }} />
        </div>
    );
}

export default GridLayoutTitle;
