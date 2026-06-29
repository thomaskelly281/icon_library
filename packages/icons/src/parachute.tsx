import { mdiParachute } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Parachute(props: IconComponentProps) {
  return <Icon path={mdiParachute} {...props} />;
}

export { mdiParachute as path };
