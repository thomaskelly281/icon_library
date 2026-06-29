import { mdiTicket } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Ticket(props: IconComponentProps) {
  return <Icon path={mdiTicket} {...props} />;
}

export { mdiTicket as path };
