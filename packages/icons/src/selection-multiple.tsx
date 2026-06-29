import { mdiSelectionMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionMultiple(props: IconComponentProps) {
  return <Icon path={mdiSelectionMultiple} {...props} />;
}

export { mdiSelectionMultiple as path };
