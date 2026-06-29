import { mdiProgressClose } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ProgressClose(props: IconComponentProps) {
  return <Icon path={mdiProgressClose} {...props} />;
}

export { mdiProgressClose as path };
