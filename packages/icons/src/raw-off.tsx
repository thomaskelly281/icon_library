import { mdiRawOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RawOff(props: IconComponentProps) {
  return <Icon path={mdiRawOff} {...props} />;
}

export { mdiRawOff as path };
