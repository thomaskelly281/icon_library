import { mdiSolarPower } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SolarPower(props: IconComponentProps) {
  return <Icon path={mdiSolarPower} {...props} />;
}

export { mdiSolarPower as path };
