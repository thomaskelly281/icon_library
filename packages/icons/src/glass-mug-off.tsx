import { mdiGlassMugOff } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassMugOff(props: IconComponentProps) {
  return <Icon path={mdiGlassMugOff} {...props} />;
}

export { mdiGlassMugOff as path };
