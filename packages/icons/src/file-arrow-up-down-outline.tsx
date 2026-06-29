import { mdiFileArrowUpDownOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileArrowUpDownOutline(props: IconComponentProps) {
  return <Icon path={mdiFileArrowUpDownOutline} {...props} />;
}

export { mdiFileArrowUpDownOutline as path };
