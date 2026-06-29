import { mdiGlassStange } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassStange(props: IconComponentProps) {
  return <Icon path={mdiGlassStange} {...props} />;
}

export { mdiGlassStange as path };
