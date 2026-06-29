import { mdiChartTimelineVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartTimelineVariant(props: IconComponentProps) {
  return <Icon path={mdiChartTimelineVariant} {...props} />;
}

export { mdiChartTimelineVariant as path };
