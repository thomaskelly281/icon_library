import { mdiArrowUpLeftBold } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowUpLeftBold(props: IconComponentProps) {
  return <Icon path={mdiArrowUpLeftBold} {...props} />;
}

export { mdiArrowUpLeftBold as path };
