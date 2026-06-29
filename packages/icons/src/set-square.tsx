import { mdiSetSquare } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SetSquare(props: IconComponentProps) {
  return <Icon path={mdiSetSquare} {...props} />;
}

export { mdiSetSquare as path };
