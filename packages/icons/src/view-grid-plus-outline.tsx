import { mdiViewGridPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewGridPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiViewGridPlusOutline} {...props} />;
}

export { mdiViewGridPlusOutline as path };
