import { mdiTicketPercent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TicketPercent(props: IconComponentProps) {
  return <Icon path={mdiTicketPercent} {...props} />;
}

export { mdiTicketPercent as path };
