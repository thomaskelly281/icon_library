import { mdiRadioactiveOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioactiveOff(props: IconComponentProps) {
  return <Icon path={mdiRadioactiveOff} {...props} />;
}

export { mdiRadioactiveOff as path };
