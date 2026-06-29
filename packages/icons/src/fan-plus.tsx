import { mdiFanPlus } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function FanPlus(props: IconComponentProps) {
  return <Icon path={mdiFanPlus} {...props} />;
}

export { mdiFanPlus as path };
