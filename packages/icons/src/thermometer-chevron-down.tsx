import { mdiThermometerChevronDown } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerChevronDown(props: IconComponentProps) {
  return <Icon path={mdiThermometerChevronDown} {...props} />;
}

export { mdiThermometerChevronDown as path };
