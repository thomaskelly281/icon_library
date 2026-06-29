import { mdiFileClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileClockOutline(props: IconComponentProps) {
  return <Icon path={mdiFileClockOutline} {...props} />;
}

export { mdiFileClockOutline as path };
