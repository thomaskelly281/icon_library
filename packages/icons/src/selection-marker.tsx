import { mdiSelectionMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionMarker(props: IconComponentProps) {
  return <Icon path={mdiSelectionMarker} {...props} />;
}

export { mdiSelectionMarker as path };
