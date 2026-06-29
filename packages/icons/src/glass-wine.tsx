import { mdiGlassWine } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassWine(props: IconComponentProps) {
  return <Icon path={mdiGlassWine} {...props} />;
}

export { mdiGlassWine as path };
