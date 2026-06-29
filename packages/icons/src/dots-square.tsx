import { mdiDotsSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DotsSquare(props: IconComponentProps) {
  return <Icon path={mdiDotsSquare} {...props} />;
}

export { mdiDotsSquare as path };
