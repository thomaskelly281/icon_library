import { mdiCheckAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function CheckAll(props: IconComponentProps) {
  return <Icon path={mdiCheckAll} {...props} />;
}

export { mdiCheckAll as path };
