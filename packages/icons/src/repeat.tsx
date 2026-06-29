import { mdiRepeat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Repeat(props: IconComponentProps) {
  return <Icon path={mdiRepeat} {...props} />;
}

export { mdiRepeat as path };
