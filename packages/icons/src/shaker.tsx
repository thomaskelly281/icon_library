import { mdiShaker } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shaker(props: IconComponentProps) {
  return <Icon path={mdiShaker} {...props} />;
}

export { mdiShaker as path };
