import { mdiKite } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Kite(props: IconComponentProps) {
  return <Icon path={mdiKite} {...props} />;
}

export { mdiKite as path };
