import { mdiSignalDistanceVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SignalDistanceVariant(props: IconComponentProps) {
  return <Icon path={mdiSignalDistanceVariant} {...props} />;
}

export { mdiSignalDistanceVariant as path };
