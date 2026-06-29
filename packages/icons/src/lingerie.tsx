import { mdiLingerie } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Lingerie(props: IconComponentProps) {
  return <Icon path={mdiLingerie} {...props} />;
}

export { mdiLingerie as path };
