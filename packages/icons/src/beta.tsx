import { mdiBeta } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Beta(props: IconComponentProps) {
  return <Icon path={mdiBeta} {...props} />;
}

export { mdiBeta as path };
