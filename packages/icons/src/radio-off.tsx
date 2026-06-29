import { mdiRadioOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioOff(props: IconComponentProps) {
  return <Icon path={mdiRadioOff} {...props} />;
}

export { mdiRadioOff as path };
