import { mdiAccountGroupOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountGroupOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountGroupOutline} {...props} />;
}

export { mdiAccountGroupOutline as path };
