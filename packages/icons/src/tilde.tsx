import { mdiTilde } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Tilde(props: IconComponentProps) {
  return <Icon path={mdiTilde} {...props} />;
}

export { mdiTilde as path };
