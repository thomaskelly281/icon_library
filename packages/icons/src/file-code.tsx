import { mdiFileCode } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileCode(props: IconComponentProps) {
  return <Icon path={mdiFileCode} {...props} />;
}

export { mdiFileCode as path };
