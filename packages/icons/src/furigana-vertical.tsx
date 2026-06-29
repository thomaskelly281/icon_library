import { mdiFuriganaVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FuriganaVertical(props: IconComponentProps) {
  return <Icon path={mdiFuriganaVertical} {...props} />;
}

export { mdiFuriganaVertical as path };
