import { mdiLaptopOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LaptopOff(props: IconComponentProps) {
  return <Icon path={mdiLaptopOff} {...props} />;
}

export { mdiLaptopOff as path };
