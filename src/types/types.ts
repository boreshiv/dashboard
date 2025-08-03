import type { AgChartOptions } from "ag-charts-community";

export type ServerLayoutItem = {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    type: "table" | "bar" | "pie";
    title?: string;
    options?: unknown[];
};

export type ServerDashboardConfig = {
    layout: ServerLayoutItem[];
};

export type IChartProps = {
    style?: React.CSSProperties;
    options: AgChartOptions;
    className?: string;
};

export interface IDashboardLayoutItem {
    component: string;
    key: string;
    props: Record<string, unknown>;
    label?: string;
}
