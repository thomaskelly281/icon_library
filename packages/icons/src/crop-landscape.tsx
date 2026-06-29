import { mdiCropLandscape } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CropLandscape(props: IconComponentProps) {
  return <Icon path={mdiCropLandscape} {...props} />;
}

export { mdiCropLandscape as path };
