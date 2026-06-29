import { mdiChartBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiChartBoxOutline} {...props} />;
}

export { mdiChartBoxOutline as path };
