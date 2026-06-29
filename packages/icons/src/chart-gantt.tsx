import { mdiChartGantt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartGantt(props: IconComponentProps) {
  return <Icon path={mdiChartGantt} {...props} />;
}

export { mdiChartGantt as path };
