import { mdiFilterPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FilterPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFilterPlusOutline} {...props} />;
}

export { mdiFilterPlusOutline as path };
