import { mdiChartSankeyVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartSankeyVariant(props: IconComponentProps) {
  return <Icon path={mdiChartSankeyVariant} {...props} />;
}

export { mdiChartSankeyVariant as path };
