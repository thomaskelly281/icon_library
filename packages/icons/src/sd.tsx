import { mdiSd } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Sd(props: IconComponentProps) {
  return <Icon path={mdiSd} {...props} />;
}

export { mdiSd as path };
