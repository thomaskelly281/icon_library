import { mdiChartScatterPlot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartScatterPlot(props: IconComponentProps) {
  return <Icon path={mdiChartScatterPlot} {...props} />;
}

export { mdiChartScatterPlot as path };
