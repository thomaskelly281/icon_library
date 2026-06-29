import { mdiTimerCheckOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TimerCheckOutline(props: IconComponentProps) {
  return <Icon path={mdiTimerCheckOutline} {...props} />;
}

export { mdiTimerCheckOutline as path };
