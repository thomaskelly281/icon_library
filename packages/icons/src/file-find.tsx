import { mdiFileFind } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FileFind(props: IconComponentProps) {
  return <Icon path={mdiFileFind} {...props} />;
}

export { mdiFileFind as path };
