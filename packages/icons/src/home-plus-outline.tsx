import { mdiHomePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiHomePlusOutline} {...props} />;
}

export { mdiHomePlusOutline as path };
