import { mdiGlassPintOutline } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassPintOutline(props: IconComponentProps) {
  return <Icon path={mdiGlassPintOutline} {...props} />;
}

export { mdiGlassPintOutline as path };
