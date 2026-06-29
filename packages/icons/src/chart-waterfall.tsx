import { mdiChartWaterfall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartWaterfall(props: IconComponentProps) {
  return <Icon path={mdiChartWaterfall} {...props} />;
}

export { mdiChartWaterfall as path };
