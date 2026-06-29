import { mdiChartPie } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartPie(props: IconComponentProps) {
  return <Icon path={mdiChartPie} {...props} />;
}

export { mdiChartPie as path };
