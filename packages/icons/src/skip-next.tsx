import { mdiSkipNext } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipNext(props: IconComponentProps) {
  return <Icon path={mdiSkipNext} {...props} />;
}

export { mdiSkipNext as path };
