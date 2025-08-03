// No import needed for CellStyleParams
import { positionColorMap } from "./employeeTableMap";

export const positionColumnStyle = (params: { value: string }) => ({
    backgroundColor: positionColorMap[params.value] + '22',
    color: positionColorMap[params.value] || '#64748b',
    borderRadius: 4,
    padding: '2px 10px 2px 6px',
    fontWeight: 500,
    fontSize: 14,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
})