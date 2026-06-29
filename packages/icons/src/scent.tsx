import { mdiScent } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Scent(props: IconComponentProps) {
  return <Icon path={mdiScent} {...props} />;
}

export { mdiScent as path };
