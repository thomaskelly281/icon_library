import { mdiMouseLeftClick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function MouseLeftClick(props: IconComponentProps) {
  return <Icon path={mdiMouseLeftClick} {...props} />;
}

export { mdiMouseLeftClick as path };
