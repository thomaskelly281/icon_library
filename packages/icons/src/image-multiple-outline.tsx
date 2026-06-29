import { mdiImageMultipleOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageMultipleOutline(props: IconComponentProps) {
  return <Icon path={mdiImageMultipleOutline} {...props} />;
}

export { mdiImageMultipleOutline as path };
