import { mdiNumericOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NumericOff(props: IconComponentProps) {
  return <Icon path={mdiNumericOff} {...props} />;
}

export { mdiNumericOff as path };
