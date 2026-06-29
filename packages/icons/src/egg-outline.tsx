import { mdiEggOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function EggOutline(props: IconComponentProps) {
  return <Icon path={mdiEggOutline} {...props} />;
}

export { mdiEggOutline as path };
