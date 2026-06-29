import { mdiAccountMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountMultipleOutline} {...props} />;
}

export { mdiAccountMultipleOutline as path };
