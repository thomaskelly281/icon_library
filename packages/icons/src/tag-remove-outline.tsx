import { mdiTagRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiTagRemoveOutline} {...props} />;
}

export { mdiTagRemoveOutline as path };
