import { mdiFlipHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FlipHorizontal(props: IconComponentProps) {
  return <Icon path={mdiFlipHorizontal} {...props} />;
}

export { mdiFlipHorizontal as path };
