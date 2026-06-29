import { mdiViewSplitHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewSplitHorizontal(props: IconComponentProps) {
  return <Icon path={mdiViewSplitHorizontal} {...props} />;
}

export { mdiViewSplitHorizontal as path };
