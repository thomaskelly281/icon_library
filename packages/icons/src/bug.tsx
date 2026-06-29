import { mdiBug } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bug(props: IconComponentProps) {
  return <Icon path={mdiBug} {...props} />;
}

export { mdiBug as path };
