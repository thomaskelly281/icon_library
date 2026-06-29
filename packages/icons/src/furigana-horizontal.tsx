import { mdiFuriganaHorizontal } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FuriganaHorizontal(props: IconComponentProps) {
  return <Icon path={mdiFuriganaHorizontal} {...props} />;
}

export { mdiFuriganaHorizontal as path };
