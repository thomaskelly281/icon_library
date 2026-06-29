import { mdiBeakerOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerOutline(props: IconComponentProps) {
  return <Icon path={mdiBeakerOutline} {...props} />;
}

export { mdiBeakerOutline as path };
