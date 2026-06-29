import { mdiAccountArrowDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowDownOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowDownOutline} {...props} />;
}

export { mdiAccountArrowDownOutline as path };
