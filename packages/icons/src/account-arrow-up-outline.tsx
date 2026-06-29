import { mdiAccountArrowUpOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AccountArrowUpOutline(props: IconComponentProps) {
  return <Icon path={mdiAccountArrowUpOutline} {...props} />;
}

export { mdiAccountArrowUpOutline as path };
