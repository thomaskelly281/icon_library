import { mdiSelectionOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionOff(props: IconComponentProps) {
  return <Icon path={mdiSelectionOff} {...props} />;
}

export { mdiSelectionOff as path };
