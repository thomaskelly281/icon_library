import { mdiCropFree } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CropFree(props: IconComponentProps) {
  return <Icon path={mdiCropFree} {...props} />;
}

export { mdiCropFree as path };
