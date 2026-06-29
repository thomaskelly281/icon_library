import { mdiBird } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bird(props: IconComponentProps) {
  return <Icon path={mdiBird} {...props} />;
}

export { mdiBird as path };
