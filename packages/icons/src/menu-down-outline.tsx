import { mdiMenuDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuDownOutline(props: IconComponentProps) {
  return <Icon path={mdiMenuDownOutline} {...props} />;
}

export { mdiMenuDownOutline as path };
