import { mdiGlassFlute } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassFlute(props: IconComponentProps) {
  return <Icon path={mdiGlassFlute} {...props} />;
}

export { mdiGlassFlute as path };
