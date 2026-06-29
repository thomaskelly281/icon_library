import { mdiPageLast } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PageLast(props: IconComponentProps) {
  return <Icon path={mdiPageLast} {...props} />;
}

export { mdiPageLast as path };
