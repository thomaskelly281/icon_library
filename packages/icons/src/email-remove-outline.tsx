import { mdiEmailRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EmailRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiEmailRemoveOutline} {...props} />;
}

export { mdiEmailRemoveOutline as path };
