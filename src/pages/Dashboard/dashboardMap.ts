import Chart from "../../components/Chart/Chart";
import EmployeeTable from "../../components/EmployeesTable/EmployeesTable";
import type { ComponentType } from "react";

export const ComponentMap: Record<string, ComponentType<any>> = {
    EmployeeTable,
    Chart,
};