import { mdiPauseBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PauseBox(props: IconComponentProps) {
  return <Icon path={mdiPauseBox} {...props} />;
}

export { mdiPauseBox as path };
