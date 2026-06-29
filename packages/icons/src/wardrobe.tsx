import { mdiWardrobe } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Wardrobe(props: IconComponentProps) {
  return <Icon path={mdiWardrobe} {...props} />;
}

export { mdiWardrobe as path };
