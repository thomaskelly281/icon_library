import { mdiChartMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartMultiple(props: IconComponentProps) {
  return <Icon path={mdiChartMultiple} {...props} />;
}

export { mdiChartMultiple as path };
