import { mdiFileImagePlusOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImagePlusOutline(props: IconComponentProps) {
  return <Icon path={mdiFileImagePlusOutline} {...props} />;
}

export { mdiFileImagePlusOutline as path };
