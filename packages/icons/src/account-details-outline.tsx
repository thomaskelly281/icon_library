import { mdiAccountDetailsOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountDetailsOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountDetailsOutline} {...props} />;
}

export { mdiAccountDetailsOutline as path };
