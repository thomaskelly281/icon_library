import { mdiBowlOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BowlOutline(props: IconComponentProps) {
  return <Icon path={mdiBowlOutline} {...props} />;
}

export { mdiBowlOutline as path };
