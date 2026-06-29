import { mdiRhombusMedium } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function RhombusMedium(props: IconComponentProps) {
  return <Icon path={mdiRhombusMedium} {...props} />;
}

export { mdiRhombusMedium as path };
