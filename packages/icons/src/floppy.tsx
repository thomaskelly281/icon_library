import { mdiFloppy } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Floppy(props: IconComponentProps) {
  return <Icon path={mdiFloppy} {...props} />;
}

export { mdiFloppy as path };
