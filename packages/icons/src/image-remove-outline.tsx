import { mdiImageRemoveOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageRemoveOutline(props: IconComponentProps) {
  return <Icon path={mdiImageRemoveOutline} {...props} />;
}

export { mdiImageRemoveOutline as path };
