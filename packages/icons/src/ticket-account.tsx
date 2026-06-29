import { mdiTicketAccount } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TicketAccount(props: IconComponentProps) {
  return <Icon path={mdiTicketAccount} {...props} />;
}

export { mdiTicketAccount as path };
