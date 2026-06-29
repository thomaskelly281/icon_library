import { mdiAdjust } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Adjust(props: IconComponentProps) {
  return <Icon path={mdiAdjust} {...props} />;
}

export { mdiAdjust as path };
