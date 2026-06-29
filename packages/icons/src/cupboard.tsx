import { mdiCupboard } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Cupboard(props: IconComponentProps) {
  return <Icon path={mdiCupboard} {...props} />;
}

export { mdiCupboard as path };
