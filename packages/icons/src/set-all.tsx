import { mdiSetAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetAll(props: IconComponentProps) {
  return <Icon path={mdiSetAll} {...props} />;
}

export { mdiSetAll as path };
