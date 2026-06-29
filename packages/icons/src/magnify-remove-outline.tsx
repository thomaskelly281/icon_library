import { mdiMagnifyRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MagnifyRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiMagnifyRemoveOutline} {...props} />;
}

export { mdiMagnifyRemoveOutline as path };
