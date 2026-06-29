import { mdiBeakerCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiBeakerCheckOutline} {...props} />;
}

export { mdiBeakerCheckOutline as path };
