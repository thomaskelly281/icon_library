import { mdiSelectionRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionRemove(props: IconComponentProps) {
  return <Icon path={mdiSelectionRemove} {...props} />;
}

export { mdiSelectionRemove as path };
