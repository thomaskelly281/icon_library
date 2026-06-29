import { mdiAccountOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountOutline} {...props} />;
}

export { mdiAccountOutline as path };
