import { mdiPipeLeak } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PipeLeak(props: IconComponentProps) {
  return <Icon path={mdiPipeLeak} {...props} />;
}

export { mdiPipeLeak as path };
