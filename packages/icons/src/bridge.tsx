import { mdiBridge } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function Bridge(props: IconComponentProps) {
  return <Icon path={mdiBridge} {...props} />;
}

export { mdiBridge as path };
