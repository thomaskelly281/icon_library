import { mdiEyeRefreshOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EyeRefreshOutline(props: IconComponentProps) {
  return <Icon path={mdiEyeRefreshOutline} {...props} />;
}

export { mdiEyeRefreshOutline as path };
