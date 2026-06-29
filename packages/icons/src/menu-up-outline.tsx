import { mdiMenuUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuUpOutline(props: IconComponentProps) {
  return <Icon path={mdiMenuUpOutline} {...props} />;
}

export { mdiMenuUpOutline as path };
