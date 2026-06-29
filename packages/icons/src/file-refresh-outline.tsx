import { mdiFileRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiFileRefreshOutline} {...props} />;
}

export { mdiFileRefreshOutline as path };
