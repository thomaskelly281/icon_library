import { mdiArrowLeftBoldBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowLeftBoldBox(props: IconComponentProps) {
  return <Icon path={mdiArrowLeftBoldBox} {...props} />;
}

export { mdiArrowLeftBoldBox as path };
