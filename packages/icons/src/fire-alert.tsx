import { mdiFireAlert } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FireAlert(props: IconComponentProps) {
  return <Icon path={mdiFireAlert} {...props} />;
}

export { mdiFireAlert as path };
