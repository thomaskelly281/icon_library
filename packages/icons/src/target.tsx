import { mdiTarget } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Target(props: IconComponentProps) {
  return <Icon path={mdiTarget} {...props} />;
}

export { mdiTarget as path };
