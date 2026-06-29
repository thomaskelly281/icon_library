import { mdiPillMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PillMultiple(props: IconComponentProps) {
  return <Icon path={mdiPillMultiple} {...props} />;
}

export { mdiPillMultiple as path };
