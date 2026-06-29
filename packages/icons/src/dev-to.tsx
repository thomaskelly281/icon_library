import { mdiDevTo } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DevTo(props: IconComponentProps) {
  return <Icon path={mdiDevTo} {...props} />;
}

export { mdiDevTo as path };
