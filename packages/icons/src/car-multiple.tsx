import { mdiCarMultiple } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CarMultiple(props: IconComponentProps) {
  return <Icon path={mdiCarMultiple} {...props} />;
}

export { mdiCarMultiple as path };
