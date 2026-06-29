import { mdiChartBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBox(props: IconComponentProps) {
  return <Icon path={mdiChartBox} {...props} />;
}

export { mdiChartBox as path };
