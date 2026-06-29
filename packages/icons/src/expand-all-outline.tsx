import { mdiExpandAllOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExpandAllOutline(props: IconComponentProps) {
  return <Icon path={mdiExpandAllOutline} {...props} />;
}

export { mdiExpandAllOutline as path };
