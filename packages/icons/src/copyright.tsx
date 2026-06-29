import { mdiCopyright } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Copyright(props: IconComponentProps) {
  return <Icon path={mdiCopyright} {...props} />;
}

export { mdiCopyright as path };
