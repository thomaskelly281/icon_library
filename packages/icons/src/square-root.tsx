import { mdiSquareRoot } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareRoot(props: IconComponentProps) {
  return <Icon path={mdiSquareRoot} {...props} />;
}

export { mdiSquareRoot as path };
