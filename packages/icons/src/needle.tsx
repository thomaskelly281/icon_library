import { mdiNeedle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Needle(props: IconComponentProps) {
  return <Icon path={mdiNeedle} {...props} />;
}

export { mdiNeedle as path };
