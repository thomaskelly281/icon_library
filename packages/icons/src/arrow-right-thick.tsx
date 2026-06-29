import { mdiArrowRightThick } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowRightThick(props: IconComponentProps) {
  return <Icon path={mdiArrowRightThick} {...props} />;
}

export { mdiArrowRightThick as path };
