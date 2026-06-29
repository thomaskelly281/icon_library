import { mdiImagePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImagePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiImagePlusOutline} {...props} />;
}

export { mdiImagePlusOutline as path };
