import { mdiChartMultiline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartMultiline(props: IconComponentProps) {
  return <Icon path={mdiChartMultiline} {...props} />;
}

export { mdiChartMultiline as path };
