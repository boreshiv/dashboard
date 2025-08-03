import type { ColDef } from "ag-grid-community";
import type { Layout } from "react-grid-layout";
import Tooltip from "../components/core/Tooltip/Tooltip";

export const defaultPageSize: number = 10;

export const defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    tooltipComponent: Tooltip,
    // cellRendererParams: (params: ICellRendererParams) => ({
    //     ...params,
    //     value: params.value,
    // }),
};

export const dashboardLayout: Layout[] = [
    { i: "grid", x: 0, y: 0, w: 12, h: 4 },
    { i: "bar", x: 0, y: 6, w: 6, h: 4 },
    { i: "pie", x: 6, y: 6, w: 6, h: 4 },
];