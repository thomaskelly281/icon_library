import { mdiAccountRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountRemoveOutline} {...props} />;
}

export { mdiAccountRemoveOutline as path };
