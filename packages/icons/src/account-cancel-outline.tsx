import { mdiAccountCancelOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountCancelOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountCancelOutline} {...props} />;
}

export { mdiAccountCancelOutline as path };
