import { mdiResistorNodes } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ResistorNodes(props: IconComponentProps) {
  return <Icon path={mdiResistorNodes} {...props} />;
}

export { mdiResistorNodes as path };
