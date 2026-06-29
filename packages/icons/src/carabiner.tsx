import { mdiCarabiner } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Carabiner(props: IconComponentProps) {
  return <Icon path={mdiCarabiner} {...props} />;
}

export { mdiCarabiner as path };
