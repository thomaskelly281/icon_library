import { mdiBookClockOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookClockOutline(props: IconComponentProps) {
  return <Icon path={mdiBookClockOutline} {...props} />;
}

export { mdiBookClockOutline as path };
