import { mdiTicketConfirmation } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TicketConfirmation(props: IconComponentProps) {
  return <Icon path={mdiTicketConfirmation} {...props} />;
}

export { mdiTicketConfirmation as path };
