import { mdiChartBoxPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBoxPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiChartBoxPlusOutline} {...props} />;
}

export { mdiChartBoxPlusOutline as path };
