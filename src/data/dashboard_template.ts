
import type { AgBarSeriesOptions, AgChartOptions, AgPieSeriesOptions } from "ag-charts-community";
import { employees } from "./employees.json"
import type { IDashboardLayoutItem } from "../types/types";

const departmentCount: Record<string, number> = employees.reduce((acc, e) => {
    acc[e.department] = (acc[e.department] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

const barChartData = Object.entries(departmentCount).map(
    ([department, count]) => ({ department, count })
);

const barOptions: AgChartOptions = {
    data: barChartData,
    series: [
        {
            type: "bar",
            xKey: "department",
            yKey: "count",
            fill: "#3b82f6",
        } satisfies AgBarSeriesOptions,
    ],
    title: { text: "Employees by Department" },
};

const locationCount: Record<string, number> = employees.reduce((acc, e) => {
    acc[e.location] = (acc[e.location] || 0) + 1;
    return acc;
}, {} as Record<string, number>);

const pieChartData = Object.entries(locationCount).map(
    ([location, count]) => ({ location, count })
);

const pieOptions: AgChartOptions = {
    data: pieChartData,
    series: [
        {
            type: "pie",
            angleKey: "count",
            calloutLabelKey: "location",
        } satisfies AgPieSeriesOptions,
    ],
    title: { text: "Employees by Location" },
};

export const dashboardLayoutTemplate: IDashboardLayoutItem[] = [
    {
        "component": "EmployeeTable",
        "key": "grid",
        "label": "Employee Table",
        "props": {
            "style": {
                "height": "100%",
                "width": "100%"
            }
        }
    },
    {
        "component": "Chart",
        "key": "bar",
        "label": "Department Chart",
        "props": {
            "style": {
                "height": "100%",
                "width": "100%"
            },
            options: barOptions
        }
    },
    {
        "component": "Chart",
        "key": "pie",
        "label": "Location Chart",
        "props": {
            "style": {
                "height": "100%",
                "width": "100%"
            },
            options: pieOptions
        }
    }
]