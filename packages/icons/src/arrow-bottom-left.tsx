import { mdiArrowBottomLeft } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowBottomLeft(props: IconComponentProps) {
  return <Icon path={mdiArrowBottomLeft} {...props} />;
}

export { mdiArrowBottomLeft as path };
