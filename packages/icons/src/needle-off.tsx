import { mdiNeedleOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function NeedleOff(props: IconComponentProps) {
  return <Icon path={mdiNeedleOff} {...props} />;
}

export { mdiNeedleOff as path };
