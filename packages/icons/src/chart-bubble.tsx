import { mdiChartBubble } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ChartBubble(props: IconComponentProps) {
  return <Icon path={mdiChartBubble} {...props} />;
}

export { mdiChartBubble as path };
