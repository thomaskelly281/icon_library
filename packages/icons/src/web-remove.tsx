import { mdiWebRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function WebRemove(props: IconComponentProps) {
  return <Icon path={mdiWebRemove} {...props} />;
}

export { mdiWebRemove as path };
