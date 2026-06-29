import { mdiBookshelf } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bookshelf(props: IconComponentProps) {
  return <Icon path={mdiBookshelf} {...props} />;
}

export { mdiBookshelf as path };
