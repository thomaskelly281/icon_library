import { mdiBellRingOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellRingOutline(props: IconComponentProps) {
  return <Icon path={mdiBellRingOutline} {...props} />;
}

export { mdiBellRingOutline as path };
