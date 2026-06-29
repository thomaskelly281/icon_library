import { mdiBookPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiBookPlusOutline} {...props} />;
}

export { mdiBookPlusOutline as path };
