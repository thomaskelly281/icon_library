import { mdiFilterRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterRemoveOutline} {...props} />;
}

export { mdiFilterRemoveOutline as path };
