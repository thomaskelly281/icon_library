import { mdiGlassTulip } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function GlassTulip(props: IconComponentProps) {
  return <Icon path={mdiGlassTulip} {...props} />;
}

export { mdiGlassTulip as path };
