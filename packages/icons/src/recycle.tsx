import { mdiRecycle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Recycle(props: IconComponentProps) {
  return <Icon path={mdiRecycle} {...props} />;
}

export { mdiRecycle as path };
