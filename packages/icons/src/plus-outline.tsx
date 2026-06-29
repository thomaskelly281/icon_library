import { mdiPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlusOutline(props: IconComponentProps) {
  return <Icon path={mdiPlusOutline} {...props} />;
}

export { mdiPlusOutline as path };
