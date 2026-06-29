import { mdiFileChartOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileChartOutline(props: IconComponentProps) {
  return <Icon path={mdiFileChartOutline} {...props} />;
}

export { mdiFileChartOutline as path };
