import { mdiRadioactiveCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RadioactiveCircle(props: IconComponentProps) {
  return <Icon path={mdiRadioactiveCircle} {...props} />;
}

export { mdiRadioactiveCircle as path };
