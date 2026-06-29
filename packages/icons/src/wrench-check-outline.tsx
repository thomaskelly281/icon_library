import { mdiWrenchCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WrenchCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiWrenchCheckOutline} {...props} />;
}

export { mdiWrenchCheckOutline as path };
