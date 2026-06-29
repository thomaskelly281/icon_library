import { mdiTicketPercentOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TicketPercentOutline(props: IconComponentProps) {
  return <Icon path={mdiTicketPercentOutline} {...props} />;
}

export { mdiTicketPercentOutline as path };
