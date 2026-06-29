import { mdiTicketOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TicketOutline(props: IconComponentProps) {
  return <Icon path={mdiTicketOutline} {...props} />;
}

export { mdiTicketOutline as path };
