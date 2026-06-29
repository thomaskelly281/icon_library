import { mdiUnreal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Unreal(props: IconComponentProps) {
  return <Icon path={mdiUnreal} {...props} />;
}

export { mdiUnreal as path };
