import { mdiHomeLightbulbOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeLightbulbOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeLightbulbOutline} {...props} />;
}

export { mdiHomeLightbulbOutline as path };
