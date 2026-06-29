import { mdiUnfoldMoreVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function UnfoldMoreVertical(props: IconComponentProps) {
  return <Icon path={mdiUnfoldMoreVertical} {...props} />;
}

export { mdiUnfoldMoreVertical as path };
