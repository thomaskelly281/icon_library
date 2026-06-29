import { mdiSelectMultipleMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectMultipleMarker(props: IconComponentProps) {
  return <Icon path={mdiSelectMultipleMarker} {...props} />;
}

export { mdiSelectMultipleMarker as path };
