import { mdiAmbulance } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ambulance(props: IconComponentProps) {
  return <Icon path={mdiAmbulance} {...props} />;
}

export { mdiAmbulance as path };
