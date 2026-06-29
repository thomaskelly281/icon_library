import { mdiPenMinus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PenMinus(props: IconComponentProps) {
  return <Icon path={mdiPenMinus} {...props} />;
}

export { mdiPenMinus as path };
