import { mdiChartBarStacked } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBarStacked(props: IconComponentProps) {
  return <Icon path={mdiChartBarStacked} {...props} />;
}

export { mdiChartBarStacked as path };
