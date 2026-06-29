import { mdiChartTree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartTree(props: IconComponentProps) {
  return <Icon path={mdiChartTree} {...props} />;
}

export { mdiChartTree as path };
