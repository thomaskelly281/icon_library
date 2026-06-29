import { mdiMenuClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MenuClose(props: IconComponentProps) {
  return <Icon path={mdiMenuClose} {...props} />;
}

export { mdiMenuClose as path };
