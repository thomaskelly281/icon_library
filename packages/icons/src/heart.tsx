import { mdiHeart } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Heart(props: IconComponentProps) {
  return <Icon path={mdiHeart} {...props} />;
}

export { mdiHeart as path };
