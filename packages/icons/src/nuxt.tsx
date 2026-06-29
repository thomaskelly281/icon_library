import { mdiNuxt } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Nuxt(props: IconComponentProps) {
  return <Icon path={mdiNuxt} {...props} />;
}

export { mdiNuxt as path };
