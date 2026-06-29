import { mdiSelectionSearch } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionSearch(props: IconComponentProps) {
  return <Icon path={mdiSelectionSearch} {...props} />;
}

export { mdiSelectionSearch as path };
