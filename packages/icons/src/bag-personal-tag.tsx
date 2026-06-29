import { mdiBagPersonalTag } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BagPersonalTag(props: IconComponentProps) {
  return <Icon path={mdiBagPersonalTag} {...props} />;
}

export { mdiBagPersonalTag as path };
