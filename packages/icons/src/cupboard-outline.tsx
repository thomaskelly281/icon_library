import { mdiCupboardOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CupboardOutline(props: IconComponentProps) {
  return <Icon path={mdiCupboardOutline} {...props} />;
}

export { mdiCupboardOutline as path };
