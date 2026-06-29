import { mdiFileImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileImage(props: IconComponentProps) {
  return <Icon path={mdiFileImage} {...props} />;
}

export { mdiFileImage as path };
