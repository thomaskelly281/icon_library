import { mdiCropSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CropSquare(props: IconComponentProps) {
  return <Icon path={mdiCropSquare} {...props} />;
}

export { mdiCropSquare as path };
