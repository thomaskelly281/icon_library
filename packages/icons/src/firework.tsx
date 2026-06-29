import { mdiFirework } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Firework(props: IconComponentProps) {
  return <Icon path={mdiFirework} {...props} />;
}

export { mdiFirework as path };
