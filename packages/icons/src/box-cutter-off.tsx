import { mdiBoxCutterOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BoxCutterOff(props: IconComponentProps) {
  return <Icon path={mdiBoxCutterOff} {...props} />;
}

export { mdiBoxCutterOff as path };
