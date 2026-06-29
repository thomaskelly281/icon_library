import { mdiArrowProjectile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function ArrowProjectile(props: IconComponentProps) {
  return <Icon path={mdiArrowProjectile} {...props} />;
}

export { mdiArrowProjectile as path };
