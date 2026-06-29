import { mdiArrowLeftBoldCircle } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftBoldCircle(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftBoldCircle} {...props} />;
}

export { mdiArrowLeftBoldCircle as path };
