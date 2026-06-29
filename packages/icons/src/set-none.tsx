import { mdiSetNone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetNone(props: IconComponentProps) {
  return <Icon path={mdiSetNone} {...props} />;
}

export { mdiSetNone as path };
