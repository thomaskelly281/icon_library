import { mdiAccountTieOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountTieOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountTieOutline} {...props} />;
}

export { mdiAccountTieOutline as path };
