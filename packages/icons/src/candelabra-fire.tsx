import { mdiCandelabraFire } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CandelabraFire(props: IconComponentProps) {
  return <Icon path={mdiCandelabraFire} {...props} />;
}

export { mdiCandelabraFire as path };
