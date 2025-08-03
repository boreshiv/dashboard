import { positionIconMap } from "../employeeTableMap";

export const PositionCellRenderer = ({ value }: { value: string }) => {
    const Icon = positionIconMap[value] || positionIconMap["Other"];
    return (
        <span>
            <Icon size={16} style={{ marginRight: 4 }} />
            {value}
        </span>
    );
};
