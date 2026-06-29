import { mdiArrowSplitHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowSplitHorizontal(props: IconComponentProps) {
  return <Icon path={mdiArrowSplitHorizontal} {...props} />;
}

export { mdiArrowSplitHorizontal as path };
