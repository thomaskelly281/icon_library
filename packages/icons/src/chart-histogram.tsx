import { mdiChartHistogram } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartHistogram(props: IconComponentProps) {
  return <Icon path={mdiChartHistogram} {...props} />;
}

export { mdiChartHistogram as path };
