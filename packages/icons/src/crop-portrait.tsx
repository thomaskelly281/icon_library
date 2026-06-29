import { mdiCropPortrait } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CropPortrait(props: IconComponentProps) {
  return <Icon path={mdiCropPortrait} {...props} />;
}

export { mdiCropPortrait as path };
