import { mdiCrop } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Crop(props: IconComponentProps) {
  return <Icon path={mdiCrop} {...props} />;
}

export { mdiCrop as path };
