import { mdiSkipPreviousCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipPreviousCircle(props: IconComponentProps) {
  return <Icon path={mdiSkipPreviousCircle} {...props} />;
}

export { mdiSkipPreviousCircle as path };
