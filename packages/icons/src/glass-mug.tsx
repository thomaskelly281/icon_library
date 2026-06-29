import { mdiGlassMug } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassMug(props: IconComponentProps) {
  return <Icon path={mdiGlassMug} {...props} />;
}

export { mdiGlassMug as path };
