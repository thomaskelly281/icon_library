import { mdiChartBar } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBar(props: IconComponentProps) {
  return <Icon path={mdiChartBar} {...props} />;
}

export { mdiChartBar as path };
