import { mdiSolarPanel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SolarPanel(props: IconComponentProps) {
  return <Icon path={mdiSolarPanel} {...props} />;
}

export { mdiSolarPanel as path };
