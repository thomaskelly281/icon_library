import { mdiSproutOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SproutOutline(props: IconComponentProps) {
  return <Icon path={mdiSproutOutline} {...props} />;
}

export { mdiSproutOutline as path };
