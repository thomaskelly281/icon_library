import { mdiImageAreaClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ImageAreaClose(props: IconComponentProps) {
  return <Icon path={mdiImageAreaClose} {...props} />;
}

export { mdiImageAreaClose as path };
