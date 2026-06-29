import { mdiTagEdit } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function TagEdit(props: IconComponentProps) {
  return <Icon path={mdiTagEdit} {...props} />;
}

export { mdiTagEdit as path };
