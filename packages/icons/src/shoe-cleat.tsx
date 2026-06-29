import { mdiShoeCleat } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ShoeCleat(props: IconComponentProps) {
  return <Icon path={mdiShoeCleat} {...props} />;
}

export { mdiShoeCleat as path };
