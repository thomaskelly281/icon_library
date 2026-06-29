import { mdiChartTimeline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartTimeline(props: IconComponentProps) {
  return <Icon path={mdiChartTimeline} {...props} />;
}

export { mdiChartTimeline as path };
