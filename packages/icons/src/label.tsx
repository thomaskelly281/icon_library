import { mdiLabel } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Label(props: IconComponentProps) {
  return <Icon path={mdiLabel} {...props} />;
}

export { mdiLabel as path };
