import { mdiPlaySpeed } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function PlaySpeed(props: IconComponentProps) {
  return <Icon path={mdiPlaySpeed} {...props} />;
}

export { mdiPlaySpeed as path };
