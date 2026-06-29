import { mdiChartBellCurve } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBellCurve(props: IconComponentProps) {
  return <Icon path={mdiChartBellCurve} {...props} />;
}

export { mdiChartBellCurve as path };
