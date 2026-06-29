import { mdiButtonPointer } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ButtonPointer(props: IconComponentProps) {
  return <Icon path={mdiButtonPointer} {...props} />;
}

export { mdiButtonPointer as path };
