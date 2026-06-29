import { mdiGlassFragile } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassFragile(props: IconComponentProps) {
  return <Icon path={mdiGlassFragile} {...props} />;
}

export { mdiGlassFragile as path };
