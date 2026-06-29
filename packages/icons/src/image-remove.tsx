import { mdiImageRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageRemove(props: IconComponentProps) {
  return <Icon path={mdiImageRemove} {...props} />;
}

export { mdiImageRemove as path };
