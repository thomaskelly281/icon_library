import { mdiHomeSwitchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeSwitchOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeSwitchOutline} {...props} />;
}

export { mdiHomeSwitchOutline as path };
