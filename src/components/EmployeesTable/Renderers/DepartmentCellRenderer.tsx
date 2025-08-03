import React from 'react'
import { Briefcase, Users, BarChart2, UserCheck } from "lucide-react";

const departmentColorMap: Record<string, string> = {
    Engineering: '#2563eb',
    Marketing: '#f59e42',
    Sales: '#10b981',
    HR: '#e11d48',
    Finance: '#a21caf',
};

const departmentIconMap: Record<string, React.ElementType> = {
    Engineering: Briefcase,
    Marketing: BarChart2,
    Sales: Users,
    HR: UserCheck,
    Finance: BarChart2,
};

const DepartmentCellRenderer = ({ value }: { value: string }) => {
    const color = departmentColorMap[value] || '#64748b';
    const Icon = departmentIconMap[value] || Briefcase;
    return (
        <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            background: color + '22',
            color,
            borderRadius: 8,
            padding: '2px 10px 2px 6px',
            fontWeight: 500,
            fontSize: 14,
            gap: 6,
            height: 20,
        }}>
            <Icon size={16} style={{ marginRight: 4 }} />
            {value}
        </span>
    );
}

export default DepartmentCellRenderer;