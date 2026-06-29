import { mdiBugPauseOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugPauseOutline(props: IconComponentProps) {
  return <Icon path={mdiBugPauseOutline} {...props} />;
}

export { mdiBugPauseOutline as path };
