import { mdiAccessPointRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccessPointRemove(props: IconComponentProps) {
  return <Icon path={mdiAccessPointRemove} {...props} />;
}

export { mdiAccessPointRemove as path };
