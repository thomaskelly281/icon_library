import { mdiGlassCocktail } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassCocktail(props: IconComponentProps) {
  return <Icon path={mdiGlassCocktail} {...props} />;
}

export { mdiGlassCocktail as path };
