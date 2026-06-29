import { mdiBugOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugOutline(props: IconComponentProps) {
  return <Icon path={mdiBugOutline} {...props} />;
}

export { mdiBugOutline as path };
