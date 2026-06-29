import { mdiAccountEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountEditOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountEditOutline} {...props} />;
}

export { mdiAccountEditOutline as path };
