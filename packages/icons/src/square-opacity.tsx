import { mdiSquareOpacity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SquareOpacity(props: IconComponentProps) {
  return <Icon path={mdiSquareOpacity} {...props} />;
}

export { mdiSquareOpacity as path };
