import { mdiChartPieOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartPieOutline(props: IconComponentProps) {
  return <Icon path={mdiChartPieOutline} {...props} />;
}

export { mdiChartPieOutline as path };
