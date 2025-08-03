import React, { useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AllCommunityModule as AllModules, ModuleRegistry, type ColDef, type ValueGetterParams } from "ag-grid-community";
import data from "../../data/employees.json";
import type { IEmployee, IEmployeeProps } from "./employee.types";
import { defaultColDef } from "../../constant/constant";
import SkillCellRenderer from "./Renderers/SkillCellRenderer";
import DepartmentCellRenderer from "./Renderers/DepartmentCellRenderer";
import HeaderRenderer from "./Renderers/HeaderRender";
import { PositionCellRenderer } from "./Renderers/PositionCellRenderer";
import { positionColumnStyle } from "./employeeTable.helpers";
import EmailCellRenderer from "./Renderers/EmailCellRenderer";

ModuleRegistry.registerModules([AllModules]);

const EmployeeTable: React.FC = (props: IEmployeeProps) => {
    const employees: IEmployee[] = data.employees;
    const columnDefs: ColDef[] = useMemo(() => [
        {
            headerName: "Name",
            headerComponent: HeaderRenderer,
            valueGetter: (p: ValueGetterParams) => `${p.data.firstName} ${p.data.lastName}`,
            tooltipValueGetter: (params: any) => {
                const { email, department, position, location } = params.data;
                return `Email: ${email}<br>Department: ${department}<br>Position: ${position}<br>Location: ${location}`;
            },
            // tooltipComponentParams: { className: 'ag-custom-tooltip' },
            // tooltipComponent: 'agTooltipComponent',
        },
        {
            headerName: "Email",
            field: "email",
            headerComponent: HeaderRenderer,
            cellRenderer: EmailCellRenderer,
        },
        {
            headerName: "Department",
            field: "department",
            headerComponent: HeaderRenderer,
            cellRenderer: DepartmentCellRenderer,
        },
        {
            headerName: "Position",
            field: "position",
            headerComponent: HeaderRenderer,
            cellRenderer: PositionCellRenderer,
            cellStyle: positionColumnStyle,
        },
        {
            headerName: "Location",
            field: "location",
            headerComponent: HeaderRenderer,
        },
        {
            headerName: "Skills",
            field: "skills",
            headerComponent: HeaderRenderer,
            cellRenderer: SkillCellRenderer
        },
    ], []);

    return (
        <>
            <style>{`
                .ag-custom-tooltip {
                    background: #fff !important;
                    color: #222 !important;
                    border-radius: 8px !important;
                    box-shadow: 0 2px 12px 0 rgba(60,72,100,0.12) !important;
                    padding: 12px 18px !important;
                    font-size: 1rem !important;
                    font-weight: 500 !important;
                    white-space: pre-line !important;
                    line-height: 1.5 !important;
                    z-index: 9999 !important;
                }
            `}</style>
            <div
                key="grid"
                className="ag-theme-alpine"
                style={{
                    padding: 10,
                    borderRadius: 6,
                    height: "100%",
                    width: "100%",
                    ...props.style,
                }}
            >
                <AgGridReact
                    rowData={employees}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                    enableBrowserTooltips={false}
                />
            </div>
        </>
    );
};

export default EmployeeTable;
