import { mdiBellSleepOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BellSleepOutline(props: IconComponentProps) {
  return <Icon path={mdiBellSleepOutline} {...props} />;
}

export { mdiBellSleepOutline as path };
