import { mdiChartSankey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartSankey(props: IconComponentProps) {
  return <Icon path={mdiChartSankey} {...props} />;
}

export { mdiChartSankey as path };
