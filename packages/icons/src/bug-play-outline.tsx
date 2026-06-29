import { mdiBugPlayOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BugPlayOutline(props: IconComponentProps) {
  return <Icon path={mdiBugPlayOutline} {...props} />;
}

export { mdiBugPlayOutline as path };
