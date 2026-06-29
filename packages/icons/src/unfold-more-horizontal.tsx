import { mdiUnfoldMoreHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UnfoldMoreHorizontal(props: IconComponentProps) {
  return <Icon path={mdiUnfoldMoreHorizontal} {...props} />;
}

export { mdiUnfoldMoreHorizontal as path };
