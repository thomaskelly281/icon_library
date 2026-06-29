import { mdiGlasses } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Glasses(props: IconComponentProps) {
  return <Icon path={mdiGlasses} {...props} />;
}

export { mdiGlasses as path };
