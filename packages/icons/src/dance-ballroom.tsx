import { mdiDanceBallroom } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function DanceBallroom(props: IconComponentProps) {
  return <Icon path={mdiDanceBallroom} {...props} />;
}

export { mdiDanceBallroom as path };
