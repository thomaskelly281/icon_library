import { mdiAccountPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountPlusOutline} {...props} />;
}

export { mdiAccountPlusOutline as path };
