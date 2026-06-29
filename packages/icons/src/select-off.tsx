import { mdiSelectOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectOff(props: IconComponentProps) {
  return <Icon path={mdiSelectOff} {...props} />;
}

export { mdiSelectOff as path };
