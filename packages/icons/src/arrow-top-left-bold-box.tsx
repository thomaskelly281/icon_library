import { mdiArrowTopLeftBoldBox } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowTopLeftBoldBox(props: IconComponentProps) {
  return <Icon path={mdiArrowTopLeftBoldBox} {...props} />;
}

export { mdiArrowTopLeftBoldBox as path };
