import { mdiCallMade } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CallMade(props: IconComponentProps) {
  return <Icon path={mdiCallMade} {...props} />;
}

export { mdiCallMade as path };
