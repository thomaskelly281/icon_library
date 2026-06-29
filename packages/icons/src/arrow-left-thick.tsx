import { mdiArrowLeftThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftThick(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftThick} {...props} />;
}

export { mdiArrowLeftThick as path };
