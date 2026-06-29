import { mdiPotMixOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PotMixOutline(props: IconComponentProps) {
  return <Icon path={mdiPotMixOutline} {...props} />;
}

export { mdiPotMixOutline as path };
