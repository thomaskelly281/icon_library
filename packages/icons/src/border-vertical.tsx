import { mdiBorderVertical } from "@mdi/js";
import { Icon, type IconComponentProps } from "./icon.js";

export function BorderVertical(props: IconComponentProps) {
  return <Icon path={mdiBorderVertical} {...props} />;
}

export { mdiBorderVertical as path };
