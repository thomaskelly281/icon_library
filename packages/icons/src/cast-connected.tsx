import { mdiCastConnected } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CastConnected(props: IconComponentProps) {
  return <Icon path={mdiCastConnected} {...props} />;
}

export { mdiCastConnected as path };
