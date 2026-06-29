import { mdiBaseball } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Baseball(props: IconComponentProps) {
  return <Icon path={mdiBaseball} {...props} />;
}

export { mdiBaseball as path };
