import { mdiTicketConfirmationOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TicketConfirmationOutline(props: IconComponentProps) {
  return <Icon path={mdiTicketConfirmationOutline} {...props} />;
}

export { mdiTicketConfirmationOutline as path };
