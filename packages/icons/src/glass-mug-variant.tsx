import { mdiGlassMugVariant } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassMugVariant(props: IconComponentProps) {
  return <Icon path={mdiGlassMugVariant} {...props} />;
}

export { mdiGlassMugVariant as path };
