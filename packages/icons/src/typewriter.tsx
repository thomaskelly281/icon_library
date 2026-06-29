import { mdiTypewriter } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Typewriter(props: IconComponentProps) {
  return <Icon path={mdiTypewriter} {...props} />;
}

export { mdiTypewriter as path };
