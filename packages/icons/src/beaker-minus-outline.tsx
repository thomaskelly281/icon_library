import { mdiBeakerMinusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BeakerMinusOutline(props: IconComponentProps) {
  return <Icon path={mdiBeakerMinusOutline} {...props} />;
}

export { mdiBeakerMinusOutline as path };
