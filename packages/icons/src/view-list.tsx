import { mdiViewList } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewList(props: IconComponentProps) {
  return <Icon path={mdiViewList} {...props} />;
}

export { mdiViewList as path };
