import { mdiHazardLights } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HazardLights(props: IconComponentProps) {
  return <Icon path={mdiHazardLights} {...props} />;
}

export { mdiHazardLights as path };
