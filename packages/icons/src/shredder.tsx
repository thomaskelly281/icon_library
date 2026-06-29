import { mdiShredder } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Shredder(props: IconComponentProps) {
  return <Icon path={mdiShredder} {...props} />;
}

export { mdiShredder as path };
