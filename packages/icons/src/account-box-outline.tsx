import { mdiAccountBoxOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountBoxOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountBoxOutline} {...props} />;
}

export { mdiAccountBoxOutline as path };
