import { AgCharts } from "ag-charts-react";
import type { IChartProps } from '../../types/types'

const Chart: React.FC<IChartProps> = (props) => {
    const { options, style, className } = props;
    return (
        <AgCharts style={style} options={options} className={className} />
    )
}

export default Chart