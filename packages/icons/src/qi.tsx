import { mdiQi } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Qi(props: IconComponentProps) {
  return <Icon path={mdiQi} {...props} />;
}

export { mdiQi as path };
