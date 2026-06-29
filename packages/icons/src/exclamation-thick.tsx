import { mdiExclamationThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ExclamationThick(props: IconComponentProps) {
  return <Icon path={mdiExclamationThick} {...props} />;
}

export { mdiExclamationThick as path };
