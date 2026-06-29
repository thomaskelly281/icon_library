import { mdiChartLineVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartLineVariant(props: IconComponentProps) {
  return <Icon path={mdiChartLineVariant} {...props} />;
}

export { mdiChartLineVariant as path };
