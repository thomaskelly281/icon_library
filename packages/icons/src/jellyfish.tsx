import { mdiJellyfish } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Jellyfish(props: IconComponentProps) {
  return <Icon path={mdiJellyfish} {...props} />;
}

export { mdiJellyfish as path };
