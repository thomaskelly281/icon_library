import { mdiImageSearchOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageSearchOutline(props: IconComponentProps) {
  return <Icon path={mdiImageSearchOutline} {...props} />;
}

export { mdiImageSearchOutline as path };
