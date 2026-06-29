import { mdiBookRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BookRemove(props: IconComponentProps) {
  return <Icon path={mdiBookRemove} {...props} />;
}

export { mdiBookRemove as path };
