import { mdiSignalHspaPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignalHspaPlus(props: IconComponentProps) {
  return <Icon path={mdiSignalHspaPlus} {...props} />;
}

export { mdiSignalHspaPlus as path };
