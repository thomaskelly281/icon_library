import { mdiViewGalleryOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewGalleryOutline(props: IconComponentProps) {
  return <Icon path={mdiViewGalleryOutline} {...props} />;
}

export { mdiViewGalleryOutline as path };
