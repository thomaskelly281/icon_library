import { mdiDeleteForever } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DeleteForever(props: IconComponentProps) {
  return <Icon path={mdiDeleteForever} {...props} />;
}

export { mdiDeleteForever as path };
