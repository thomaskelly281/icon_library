import { mdiImage } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Image(props: IconComponentProps) {
  return <Icon path={mdiImage} {...props} />;
}

export { mdiImage as path };
