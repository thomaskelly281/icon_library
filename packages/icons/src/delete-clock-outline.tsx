import { mdiDeleteClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteClockOutline(props: IconComponentProps) {
  return <Icon path={mdiDeleteClockOutline} {...props} />;
}

export { mdiDeleteClockOutline as path };
