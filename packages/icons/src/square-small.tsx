import { mdiSquareSmall } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareSmall(props: IconComponentProps) {
  return <Icon path={mdiSquareSmall} {...props} />;
}

export { mdiSquareSmall as path };
