import { mdiHomeCityOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function HomeCityOutline(props: IconComponentProps) {
  return <Icon path={mdiHomeCityOutline} {...props} />;
}

export { mdiHomeCityOutline as path };
