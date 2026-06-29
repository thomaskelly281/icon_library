import { mdiMagnifyPlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyPlusOutline(props: IconComponentProps) {
  return <Icon path={mdiMagnifyPlusOutline} {...props} />;
}

export { mdiMagnifyPlusOutline as path };
