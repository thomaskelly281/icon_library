import { mdiPotSteam } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PotSteam(props: IconComponentProps) {
  return <Icon path={mdiPotSteam} {...props} />;
}

export { mdiPotSteam as path };
