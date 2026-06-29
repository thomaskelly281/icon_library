import { mdiArrowTopLeftThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowTopLeftThick(props: IconComponentProps) {
  return <Icon path={mdiArrowTopLeftThick} {...props} />;
}

export { mdiArrowTopLeftThick as path };
