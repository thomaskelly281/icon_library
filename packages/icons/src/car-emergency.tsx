import { mdiCarEmergency } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarEmergency(props: IconComponentProps) {
  return <Icon path={mdiCarEmergency} {...props} />;
}

export { mdiCarEmergency as path };
