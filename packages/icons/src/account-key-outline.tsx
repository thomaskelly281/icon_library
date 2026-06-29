import { mdiAccountKeyOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountKeyOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountKeyOutline} {...props} />;
}

export { mdiAccountKeyOutline as path };
