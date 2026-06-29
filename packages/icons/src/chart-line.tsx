import { mdiChartLine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartLine(props: IconComponentProps) {
  return <Icon path={mdiChartLine} {...props} />;
}

export { mdiChartLine as path };
