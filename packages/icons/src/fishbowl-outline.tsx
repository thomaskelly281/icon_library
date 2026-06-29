import { mdiFishbowlOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FishbowlOutline(props: IconComponentProps) {
  return <Icon path={mdiFishbowlOutline} {...props} />;
}

export { mdiFishbowlOutline as path };
