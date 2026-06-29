import { mdiThermometerChevronUp } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ThermometerChevronUp(props: IconComponentProps) {
  return <Icon path={mdiThermometerChevronUp} {...props} />;
}

export { mdiThermometerChevronUp as path };
