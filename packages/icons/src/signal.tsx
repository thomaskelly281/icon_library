import { mdiSignal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Signal(props: IconComponentProps) {
  return <Icon path={mdiSignal} {...props} />;
}

export { mdiSignal as path };
