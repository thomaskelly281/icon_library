import { mdiFileMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileMultiple(props: IconComponentProps) {
  return <Icon path={mdiFileMultiple} {...props} />;
}

export { mdiFileMultiple as path };
