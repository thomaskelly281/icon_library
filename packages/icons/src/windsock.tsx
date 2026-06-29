import { mdiWindsock } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Windsock(props: IconComponentProps) {
  return <Icon path={mdiWindsock} {...props} />;
}

export { mdiWindsock as path };
