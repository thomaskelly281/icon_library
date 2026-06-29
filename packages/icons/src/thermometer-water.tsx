import { mdiThermometerWater } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerWater(props: IconComponentProps) {
  return <Icon path={mdiThermometerWater} {...props} />;
}

export { mdiThermometerWater as path };
