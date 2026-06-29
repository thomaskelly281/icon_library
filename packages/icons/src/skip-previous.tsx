import { mdiSkipPrevious } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipPrevious(props: IconComponentProps) {
  return <Icon path={mdiSkipPrevious} {...props} />;
}

export { mdiSkipPrevious as path };
