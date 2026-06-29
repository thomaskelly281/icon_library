import { mdiSignalVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignalVariant(props: IconComponentProps) {
  return <Icon path={mdiSignalVariant} {...props} />;
}

export { mdiSignalVariant as path };
