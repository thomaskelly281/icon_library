import { mdiImageEditOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageEditOutline(props: IconComponentProps) {
  return <Icon path={mdiImageEditOutline} {...props} />;
}

export { mdiImageEditOutline as path };
