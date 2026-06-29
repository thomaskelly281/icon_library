import { mdiDesk } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Desk(props: IconComponentProps) {
  return <Icon path={mdiDesk} {...props} />;
}

export { mdiDesk as path };
