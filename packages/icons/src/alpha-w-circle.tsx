import { mdiAlphaWCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function AlphaWCircle(props: IconComponentProps) {
  return <Icon path={mdiAlphaWCircle} {...props} />;
}

export { mdiAlphaWCircle as path };
