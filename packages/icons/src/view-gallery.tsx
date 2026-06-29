import { mdiViewGallery } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewGallery(props: IconComponentProps) {
  return <Icon path={mdiViewGallery} {...props} />;
}

export { mdiViewGallery as path };
