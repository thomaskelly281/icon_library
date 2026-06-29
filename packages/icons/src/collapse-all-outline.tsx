import { mdiCollapseAllOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CollapseAllOutline(props: IconComponentProps) {
  return <Icon path={mdiCollapseAllOutline} {...props} />;
}

export { mdiCollapseAllOutline as path };
