import { mdiTransitConnection } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TransitConnection(props: IconComponentProps) {
  return <Icon path={mdiTransitConnection} {...props} />;
}

export { mdiTransitConnection as path };
