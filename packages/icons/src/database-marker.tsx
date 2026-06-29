import { mdiDatabaseMarker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DatabaseMarker(props: IconComponentProps) {
  return <Icon path={mdiDatabaseMarker} {...props} />;
}

export { mdiDatabaseMarker as path };
