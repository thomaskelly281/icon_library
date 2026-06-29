import { mdiLabelOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function LabelOff(props: IconComponentProps) {
  return <Icon path={mdiLabelOff} {...props} />;
}

export { mdiLabelOff as path };
