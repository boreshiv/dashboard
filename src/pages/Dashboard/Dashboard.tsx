import React from "react";
import GridLayout, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { dashboardLayoutTemplate } from "../../data/dashboard_template";
import { ComponentMap } from "./dashboardMap";
import { dashboardLayout } from "../../constant/constant";
import "./DashBoard.css"; // Assuming you have a CSS file for styling
import GridLayoutTitle from "../../components/GridLayoutTitle/GridLayoutTitle";


const ResponsiveGridLayout = WidthProvider(GridLayout);

const Dashboard: React.FC = () => {

    return (
        <div className="dashboard-container">
            <ResponsiveGridLayout
                className="layout"
                layout={dashboardLayout}
                cols={12}
                rowHeight={100}
                autoSize={true}
                isResizable={true}
                margin={[40, 40]}
                draggableHandle=".drag-handle"
            >
                {
                    dashboardLayoutTemplate.map((item) => {
                        const Component = ComponentMap[item.component];
                        return (
                            <div
                                key={item.key}
                                className="dashboard-tile"
                                style={{
                                    ...(item.props.style ?? {}),
                                }}
                            >
                                <GridLayoutTitle>
                                    {item.label || item.key}
                                </GridLayoutTitle>
                                <Component {...item.props} />
                            </div>
                        );
                    })
                }
            </ResponsiveGridLayout>
        </div>
    );
};

export default Dashboard;
