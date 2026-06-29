import { mdiCropRotate } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CropRotate(props: IconComponentProps) {
  return <Icon path={mdiCropRotate} {...props} />;
}

export { mdiCropRotate as path };
