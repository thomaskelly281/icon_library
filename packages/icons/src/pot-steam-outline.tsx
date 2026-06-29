import { mdiPotSteamOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PotSteamOutline(props: IconComponentProps) {
  return <Icon path={mdiPotSteamOutline} {...props} />;
}

export { mdiPotSteamOutline as path };
