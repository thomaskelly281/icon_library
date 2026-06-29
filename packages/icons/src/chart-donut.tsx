import { mdiChartDonut } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartDonut(props: IconComponentProps) {
  return <Icon path={mdiChartDonut} {...props} />;
}

export { mdiChartDonut as path };
