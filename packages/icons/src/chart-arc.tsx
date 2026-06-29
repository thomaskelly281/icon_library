import { mdiChartArc } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartArc(props: IconComponentProps) {
  return <Icon path={mdiChartArc} {...props} />;
}

export { mdiChartArc as path };
