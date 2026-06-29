import { mdiImageEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageEdit(props: IconComponentProps) {
  return <Icon path={mdiImageEdit} {...props} />;
}

export { mdiImageEdit as path };
