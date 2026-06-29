import { mdiAccountBoxPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountBoxPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountBoxPlusOutline} {...props} />;
}

export { mdiAccountBoxPlusOutline as path };
