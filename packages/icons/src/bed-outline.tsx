import { mdiBedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BedOutline(props: IconComponentProps) {
  return <Icon path={mdiBedOutline} {...props} />;
}

export { mdiBedOutline as path };
