import { mdiChartLineStacked } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartLineStacked(props: IconComponentProps) {
  return <Icon path={mdiChartLineStacked} {...props} />;
}

export { mdiChartLineStacked as path };
