import { mdiSolarPanelLarge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SolarPanelLarge(props: IconComponentProps) {
  return <Icon path={mdiSolarPanelLarge} {...props} />;
}

export { mdiSolarPanelLarge as path };
