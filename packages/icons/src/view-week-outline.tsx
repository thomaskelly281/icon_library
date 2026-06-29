import { mdiViewWeekOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewWeekOutline(props: IconComponentProps) {
  return <Icon path={mdiViewWeekOutline} {...props} />;
}

export { mdiViewWeekOutline as path };
