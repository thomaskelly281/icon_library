import { mdiChartBoxMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBoxMultiple(props: IconComponentProps) {
  return <Icon path={mdiChartBoxMultiple} {...props} />;
}

export { mdiChartBoxMultiple as path };
