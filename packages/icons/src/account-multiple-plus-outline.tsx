import { mdiAccountMultiplePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountMultiplePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountMultiplePlusOutline} {...props} />;
}

export { mdiAccountMultiplePlusOutline as path };
