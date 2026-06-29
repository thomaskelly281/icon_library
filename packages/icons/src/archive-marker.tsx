import { mdiArchiveMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArchiveMarker(props: IconComponentProps) {
  return <Icon path={mdiArchiveMarker} {...props} />;
}

export { mdiArchiveMarker as path };
