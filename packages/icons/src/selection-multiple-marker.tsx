import { mdiSelectionMultipleMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectionMultipleMarker(props: IconComponentProps) {
  return <Icon path={mdiSelectionMultipleMarker} {...props} />;
}

export { mdiSelectionMultipleMarker as path };
