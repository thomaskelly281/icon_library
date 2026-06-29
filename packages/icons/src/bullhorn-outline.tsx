import { mdiBullhornOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BullhornOutline(props: IconComponentProps) {
  return <Icon path={mdiBullhornOutline} {...props} />;
}

export { mdiBullhornOutline as path };
