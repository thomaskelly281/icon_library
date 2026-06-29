import { mdiClippy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Clippy(props: IconComponentProps) {
  return <Icon path={mdiClippy} {...props} />;
}

export { mdiClippy as path };
