import { mdiFanRemove } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanRemove(props: IconComponentProps) {
  return <Icon path={mdiFanRemove} {...props} />;
}

export { mdiFanRemove as path };
