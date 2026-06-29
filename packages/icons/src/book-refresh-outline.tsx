import { mdiBookRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiBookRefreshOutline} {...props} />;
}

export { mdiBookRefreshOutline as path };
