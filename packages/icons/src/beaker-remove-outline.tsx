import { mdiBeakerRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiBeakerRemoveOutline} {...props} />;
}

export { mdiBeakerRemoveOutline as path };
