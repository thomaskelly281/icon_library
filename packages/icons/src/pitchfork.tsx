import { mdiPitchfork } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Pitchfork(props: IconComponentProps) {
  return <Icon path={mdiPitchfork} {...props} />;
}

export { mdiPitchfork as path };
