import { mdiBunkBedOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BunkBedOutline(props: IconComponentProps) {
  return <Icon path={mdiBunkBedOutline} {...props} />;
}

export { mdiBunkBedOutline as path };
