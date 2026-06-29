import { mdiSignalHspa } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignalHspa(props: IconComponentProps) {
  return <Icon path={mdiSignalHspa} {...props} />;
}

export { mdiSignalHspa as path };
