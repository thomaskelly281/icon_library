import { mdiJumpRope } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function JumpRope(props: IconComponentProps) {
  return <Icon path={mdiJumpRope} {...props} />;
}

export { mdiJumpRope as path };
