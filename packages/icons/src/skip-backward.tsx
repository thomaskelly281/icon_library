import { mdiSkipBackward } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SkipBackward(props: IconComponentProps) {
  return <Icon path={mdiSkipBackward} {...props} />;
}

export { mdiSkipBackward as path };
