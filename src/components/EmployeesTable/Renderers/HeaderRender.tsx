import { headerIconMap } from "../employeeTableMap";

const HeaderRenderer = (props: { displayName: string }) => {
    const Icon = headerIconMap[props.displayName] || headerIconMap["Name"];
    return (
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontWeight: 700, fontSize: 15, color: '#3730a3' }}>
            <Icon size={16} style={{ marginRight: 2 }} />
            {props.displayName}
        </span>
    );
};

export default HeaderRenderer;