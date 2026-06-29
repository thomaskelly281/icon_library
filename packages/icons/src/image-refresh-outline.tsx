import { mdiImageRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiImageRefreshOutline} {...props} />;
}

export { mdiImageRefreshOutline as path };
