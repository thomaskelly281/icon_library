import { mdiHulu } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Hulu(props: IconComponentProps) {
  return <Icon path={mdiHulu} {...props} />;
}

export { mdiHulu as path };
