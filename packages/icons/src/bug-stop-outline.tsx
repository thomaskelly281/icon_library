import { mdiBugStopOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugStopOutline(props: IconComponentProps) {
  return <Icon path={mdiBugStopOutline} {...props} />;
}

export { mdiBugStopOutline as path };
