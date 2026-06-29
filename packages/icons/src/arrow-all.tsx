import { mdiArrowAll } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowAll(props: IconComponentProps) {
  return <Icon path={mdiArrowAll} {...props} />;
}

export { mdiArrowAll as path };
