import { mdiBeakerPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiBeakerPlusOutline} {...props} />;
}

export { mdiBeakerPlusOutline as path };
