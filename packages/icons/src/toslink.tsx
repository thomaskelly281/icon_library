import { mdiToslink } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Toslink(props: IconComponentProps) {
  return <Icon path={mdiToslink} {...props} />;
}

export { mdiToslink as path };
