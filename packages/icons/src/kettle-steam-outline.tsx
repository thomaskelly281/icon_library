import { mdiKettleSteamOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function KettleSteamOutline(props: IconComponentProps) {
  return <Icon path={mdiKettleSteamOutline} {...props} />;
}

export { mdiKettleSteamOutline as path };
