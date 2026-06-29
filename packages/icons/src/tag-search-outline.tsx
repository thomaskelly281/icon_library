import { mdiTagSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiTagSearchOutline} {...props} />;
}

export { mdiTagSearchOutline as path };
