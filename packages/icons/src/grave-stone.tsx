import { mdiGraveStone } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GraveStone(props: IconComponentProps) {
  return <Icon path={mdiGraveStone} {...props} />;
}

export { mdiGraveStone as path };
