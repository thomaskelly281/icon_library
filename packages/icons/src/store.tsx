import { mdiStore } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Store(props: IconComponentProps) {
  return <Icon path={mdiStore} {...props} />;
}

export { mdiStore as path };
