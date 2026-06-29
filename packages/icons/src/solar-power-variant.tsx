import { mdiSolarPowerVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SolarPowerVariant(props: IconComponentProps) {
  return <Icon path={mdiSolarPowerVariant} {...props} />;
}

export { mdiSolarPowerVariant as path };
