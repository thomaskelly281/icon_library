import { mdiHomeBatteryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeBatteryOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeBatteryOutline} {...props} />;
}

export { mdiHomeBatteryOutline as path };
