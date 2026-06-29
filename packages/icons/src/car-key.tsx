import { mdiCarKey } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarKey(props: IconComponentProps) {
  return <Icon path={mdiCarKey} {...props} />;
}

export { mdiCarKey as path };
