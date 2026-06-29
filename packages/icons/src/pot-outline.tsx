import { mdiPotOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PotOutline(props: IconComponentProps) {
  return <Icon path={mdiPotOutline} {...props} />;
}

export { mdiPotOutline as path };
