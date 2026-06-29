import { mdiEggOffOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EggOffOutline(props: IconComponentProps) {
  return <Icon path={mdiEggOffOutline} {...props} />;
}

export { mdiEggOffOutline as path };
