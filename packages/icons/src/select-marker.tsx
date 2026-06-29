import { mdiSelectMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SelectMarker(props: IconComponentProps) {
  return <Icon path={mdiSelectMarker} {...props} />;
}

export { mdiSelectMarker as path };
