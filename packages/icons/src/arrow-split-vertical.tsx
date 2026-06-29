import { mdiArrowSplitVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowSplitVertical(props: IconComponentProps) {
  return <Icon path={mdiArrowSplitVertical} {...props} />;
}

export { mdiArrowSplitVertical as path };
