import { mdiSpiderThread } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function SpiderThread(props: IconComponentProps) {
  return <Icon path={mdiSpiderThread} {...props} />;
}

export { mdiSpiderThread as path };
