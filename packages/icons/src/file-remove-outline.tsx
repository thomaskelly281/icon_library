import { mdiFileRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFileRemoveOutline} {...props} />;
}

export { mdiFileRemoveOutline as path };
