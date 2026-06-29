import { mdiViewSplitVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ViewSplitVertical(props: IconComponentProps) {
  return <Icon path={mdiViewSplitVertical} {...props} />;
}

export { mdiViewSplitVertical as path };
