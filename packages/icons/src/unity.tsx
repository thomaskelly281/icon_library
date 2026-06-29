import { mdiUnity } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Unity(props: IconComponentProps) {
  return <Icon path={mdiUnity} {...props} />;
}

export { mdiUnity as path };
