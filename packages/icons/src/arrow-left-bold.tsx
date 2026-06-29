import { mdiArrowLeftBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftBold(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftBold} {...props} />;
}

export { mdiArrowLeftBold as path };
