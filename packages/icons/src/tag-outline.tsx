import { mdiTagOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagOutline(props: IconComponentProps) {
  return <Icon path={mdiTagOutline} {...props} />;
}

export { mdiTagOutline as path };
