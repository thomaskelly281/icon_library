import { mdiWardrobeOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WardrobeOutline(props: IconComponentProps) {
  return <Icon path={mdiWardrobeOutline} {...props} />;
}

export { mdiWardrobeOutline as path };
